import { account, ID } from "../appwrite/config"

export const registerUser = async (
  email: string,
  password: string,
  name: string
) => {
  return await account.create(ID.unique(), email, password, name);
};

export const loginUser = async (
  email: string,
  password: string
) => {
  return await account.createEmailPasswordSession(email, password);
};

export const logoutUser = async () => {
  return await account.deleteSession("current");
};

export const getCurrentUser = async () => {
  return await account.get();
};