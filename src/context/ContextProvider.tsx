import {
  loginAccount,
  logoutAccount,
  registerAccount,
  valueProps,
} from "@/appwrite/Requests";
import React, { createContext, useState } from "react";

type defaultValues = {
  user: userProps | null;
  isLoading: boolean;
  error: string;
  registerUser: (val: valueProps) => void;
  loginUser: (val: valueProps) => void;
  deleteUser: () => Promise<void>;
};

export const AppContext = createContext<defaultValues | null>(null);

type userProps = {
  id: string;
  email: string;
};

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const registerUser = async (val: valueProps) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await registerAccount(val);
      setUser({ id: response.$id, email: response.email });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (val: valueProps) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await loginAccount(val);
      setUser({ id: response.userId, email: response.providerUid });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async () => {
    await logoutAccount();
    setUser(null);
  };

  const values = {
    user,
    isLoading,
    registerUser,
    loginUser,
    deleteUser,
    error,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default ContextProvider;
