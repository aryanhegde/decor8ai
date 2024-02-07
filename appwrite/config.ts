import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  //create new user account inside appwrite
  async createUserAccount() {
    try {
      await account.createOAuth2Session(
        "google",
        "http://localhost:3000/create"
      );
    } catch (error) {
      console.log(error);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}
    return false;
  }

  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getCurrentUser error: ", error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error: ", error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
