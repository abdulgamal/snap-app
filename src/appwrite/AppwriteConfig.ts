import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.APPWRITE_PROJECT_ID,
  url: import.meta.env.APPWRITE_URL,
};
export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
