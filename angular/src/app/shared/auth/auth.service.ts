import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {ProductService} from '../services/product.service';
import {error} from '@angular/compiler/src/util';

@Injectable()
export class AuthService {

    private tokenUrl = 'http://localhost:8080/oauth/token?grant_type=password&username=';
    token: string;
    name: string;
    role: string;

    constructor(private httpClient: HttpClient, private router: Router, private productService: ProductService) {
    }

    signupUser(email: string, password: string) {
        // your code for signing up the new user

    }

    getRole(email) {
        return this.httpClient.get('http://localhost:8080/public/member/' + email, this.productService.httpHeadrs);
    }

    signinUser(email: string, password: string) {
        // your code for checking credentials and getting tokens for for signing in user
        this.httpClient.get(this.tokenUrl + email + '&password=' + password, {headers: new HttpHeaders({'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='})})
            .subscribe(res => {
                console.log(JSON.stringify(res));
                localStorage.setItem('access_token', res['access_token']);
                this.token = localStorage.getItem('access_token');
                this.getRole(email).subscribe(res2 => {
                    localStorage.setItem('name', res2['name']);
                    localStorage.setItem('role', res2['role']);
                    console.log(localStorage.getItem('role'));
                    this.name = localStorage.getItem('name');
                    this.role = localStorage.getItem('role');
                    this.loginRoter(this.role, this.token)
                });

            }, err => {
                console.log('HTTP Error', err);
                alert('email and password error');

            });
    }

    loginRoter(role, token) {
        if (token !== null) {
            if (role === 'user') {
                this.router.navigate(['']);
            }
            if (role === 'admin') {
                this.router.navigate(['admin']);
            }
        }
    }

    logout() {
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        localStorage.removeItem('access_token');
        this.router.navigate(['']);
    }

    getToken() {
        return this.token;
    }

    isAuthenticated(): boolean {
        // here you can check if user is authenticated or not through his token
        const token1 = localStorage.getItem('access_token');
        if (token1 != null) {
            return true;
        } else {
            this.router.navigate(['error']);
            return false;
        }

    }
}

