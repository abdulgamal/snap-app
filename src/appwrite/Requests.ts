import { ID } from "appwrite";
import { account, appwriteConfig, databases } from "./AppwriteConfig";

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

export const createUser = async (values: valueProps) => {
  return await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userId,
    ID.unique(),
    { Name: values.name, Email: values.email }
  );
};
export const logoutAccount = async () => await account.deleteSession("current");
