import { ID } from "appwrite";
import { account } from "./AppwriteConfig";

export type valueProps = {
  name?: string;
  email: string;
  password: string;
};

export const registerAccount = async (values: valueProps) => {
  return await account.create(
    ID.unique(),
    values.email,
    values.password,
    values.name
  );
};

export const loginAccount = async (values: valueProps) => {
  return await account.createEmailSession(values.email, values.password);
};

export const logoutAccount = async () => await account.deleteSession("current");
