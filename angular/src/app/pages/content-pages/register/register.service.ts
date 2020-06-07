import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8080/registration';

  constructor(private httpClient: HttpClient) {
  }

  register(value) {
   return  this.httpClient.post(this.url, value)
  }
}
