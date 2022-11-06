import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
    templateUrl: './login.component.html',
    styles: [ `
    em { float: right; color:#E05C65; padding-left: 10px}
    `]
})

export class LoginComponent {
    userName: string = "";
    passWord: string = "";
    mouseoverLogin: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router) {
        
    }

    login(formValues: { userName: string; passWord: string; }) {
        this.authService.loginUser(formValues.userName, formValues.passWord)

        this.router.navigate(['events']);
    }

    cancel(){
        this.router.navigate(['events']);
    }
}