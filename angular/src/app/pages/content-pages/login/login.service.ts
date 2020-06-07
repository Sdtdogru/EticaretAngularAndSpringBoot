import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private url = 'http://localhost:8080/oauth/token?grant_type=password&username=sedat&password=123';

    constructor(private  httpClient: HttpClient, private router: Router) {
    }

    loginAdmin(loginForm) {

        const sedat = loginForm.username;
        const password = loginForm.password;


        // tslint:disable-next-line:max-line-length
        this.httpClient.get('http://localhost:8080/oauth/token?grant_type=password&username=' + sedat + '&password=' + password, {headers: new HttpHeaders({'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='})})
            .subscribe(res => {
                console.log(JSON.stringify(res));
                localStorage.setItem('access_token', res['access_token']);
                console.log(localStorage.getItem('access_token'));

                this.router.navigate(['admin']);
                this.getTokenAdmin();

            });


    }


    getTokenAdmin() {

        this.httpClient.get('http://localhost:8080/sedat',
            {headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')})}).subscribe(res => {
            console.log(JSON.stringify(res));

            localStorage.setItem('name', res['name']);
            localStorage.setItem('role', res['roles']);
            console.log(JSON.stringify(localStorage.getItem('name')));
            console.log(JSON.stringify(localStorage.getItem('role')));

        });
    }

}
