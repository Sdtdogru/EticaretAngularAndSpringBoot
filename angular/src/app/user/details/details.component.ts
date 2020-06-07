import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DashboardService} from '../user-dashboard2/dashboard.service';
import {HttpClient} from '@angular/common/http';
import {DetailsMetadataMetadata} from './details.metadata';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    product: DetailsMetadataMetadata[];
    sepet = [];
    count = 1;
    id: string;

    constructor(private route: ActivatedRoute, private dashboardService: DashboardService, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            console.log(params.get('{id}')), this.httpClient.get<DetailsMetadataMetadata[]>('http://localhost:3000/products?id=' + params.get('{id}')).subscribe(data => {
                this.product = data , console.log(this.product)
            })
        });
    }

    setSepet() {
        if (this.count === 1) {
            this.sepet = JSON.parse(localStorage.getItem('sepet')) || [];
            localStorage.setItem('sepet', JSON.stringify(this.sepet));
            this.sepet.push(this.product)
            localStorage.setItem('sepet', JSON.stringify(this.sepet));
            this.count++;
        } else {
            this.sepet.push(this.product)
            localStorage.setItem('sepet', JSON.stringify(this.sepet));
        }
        this.dashboardService.sepet = [1, 2]
    }
}
