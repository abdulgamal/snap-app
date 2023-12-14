import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID || "",
  url: import.meta.env.VITE_APPWRITE_URL || "",
  databaseId: import.meta.env.VITE_DATABASE_ID || "",
  userId: import.meta.env.VITE_USER_ID || "",
};

const client = new Client()
  .setEndpoint(appwriteConfig.url)
  .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
