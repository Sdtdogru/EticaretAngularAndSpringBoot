import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DashboardService} from './dashboard.service';
import {HttpClient} from '@angular/common/http';
import {ProductMetadata} from './product.metadata';

@Component({
    selector: 'app-user-dashboard2',
    templateUrl: './user-dashboard2.component.html',
    styleUrls: ['./user-dashboard2.component.css']
})
export class UserDashboard2Component implements OnInit {

    products: ProductMetadata;

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(params.get('{id}')), this.httpClient.get<ProductMetadata>('http://localhost:8080/public/category/' + params.get('{id}')).subscribe(data => {
                this.products = data , console.log(this.products)
            })
        });

    }

}
