import conf from '../conf/conf.js'
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
    //2nd method 
    //call appwrite services make a wrapper
    async creatAccount({email,password,name}){
        try {
           const userAccount=await this.account.create(ID.unique(),email, password,name) 

           if(userAccount){
            //call another method
            // return userAccount;
            return this.login({email,password})
           }else{
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }
    //login
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    //getCurrentUser
    async getCurrentUser(){
        try {
           return await this.account.get(); 
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
            
        }
        return null;
    }

    //logout
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService

//authantication service with appwrite 

