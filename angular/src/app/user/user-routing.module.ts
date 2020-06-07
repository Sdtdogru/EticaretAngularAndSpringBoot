import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDashboard1Component} from './user-dashboard1/user-dashboard1.component';
import {UserDashboard2Component} from './user-dashboard2/user-dashboard2.component';
import {DetailsComponent} from './details/details.component';
import {BasketComponent} from './basket/basket.component';



const routes: Routes = [
  {
    path: '',
    component: UserDashboard1Component,
    data: {
      title: 'Coming Soon page'
    }
  },
  {
    path: 'category/:{id}',
    component: UserDashboard2Component,
    data: {
      title: 'Coming Soon page'
    }
  },
  {
    path: 'product/:{id}',
    component: DetailsComponent,
    data: {
      title: 'Coming Soon page'
    }
  },
  {
    path: 'basket',
    component: BasketComponent,
    data: {
      title: 'Coming Soon page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
// tslint:disable-next-line:class-name
export class userRoutingModule { }
