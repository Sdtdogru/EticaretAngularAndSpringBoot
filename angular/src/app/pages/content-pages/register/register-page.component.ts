import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from './register.service';


@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
    @ViewChild('f') registerForm: NgForm;

    constructor(private registeryService: RegisterService) {
    }

    //  On submit click, reset field value
    onSubmit() {
        this.registerForm.reset();
    }

    signup(formValue) {
        const name = formValue.name;
        const username = formValue.username;
        const password = formValue.password;
        console.log(name, username, password);

        this.registeryService.register(formValue).subscribe(
            res => console.log(JSON.stringify(res))
        );

    }
}
