import { Component, OnInit } from '@angular/core';
import {CATEGORYROUTES} from './user-navbar2-routes.config';


@Component({
  selector: 'app-user-navbar2',
  templateUrl: './user-navbar2.component.html',
  styleUrls: ['./user-navbar2.component.css']
})
export class UserNavbar2Component implements OnInit {
  categorys: any[]
  constructor() { }

  ngOnInit(): void {
    this.categorys = CATEGORYROUTES;
  }

}
