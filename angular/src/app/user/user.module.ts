import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {userRoutingModule} from './user-routing.module';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserNavbar2Component } from './user-navbar2/user-navbar2.component';
import { UserDashboard1Component } from './user-dashboard1/user-dashboard1.component';
import { UserDashboard2Component } from './user-dashboard2/user-dashboard2.component';
import { DetailsComponent } from './details/details.component';
import { BasketComponent } from './basket/basket.component';



@NgModule({
  declarations: [UserComponent, UserNavbarComponent, UserNavbar2Component, UserDashboard1Component, UserDashboard2Component, DetailsComponent, BasketComponent],
    imports: [
        CommonModule,
        userRoutingModule,
        PerfectScrollbarModule,
        NgbModule
    ]
})
export class UserModule { }
