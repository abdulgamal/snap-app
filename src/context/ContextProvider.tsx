import {
  createUser,
  loginAccount,
  logoutAccount,
  registerAccount,
  valueProps,
} from "@/appwrite/Requests";
import React, { createContext, useEffect, useState } from "react";

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
      localStorage.setItem(
        "user",
        JSON.stringify({ id: response.$id, email: response.email })
      );
      await createUser(val);
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
      localStorage.setItem(
        "user",
        JSON.stringify({ id: response.userId, email: response.providerUid })
      );
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
    localStorage.clear();
  };

  function isObjectEmpty(obj: userProps) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (!isObjectEmpty(storedUser)) {
      setUser(storedUser);
    }
  }, []);

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
