import conf from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    //property
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client)
    }
}

const authService = new AuthService();

export default AuthService



authService