import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {

    currentUser!: IUser;

    loginUser(userName: string, passWord: string){
        this.currentUser = {
            id: 1,
            firstName: 'John',
            lastName: 'Papa',
            userName: userName
        }
    }

    isAuthenticated(){
       return !!this.currentUser; 
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}