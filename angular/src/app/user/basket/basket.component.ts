import {Component, OnInit} from '@angular/core';
import {BasketMetadata} from './basket.metadata';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

    basketProducts: BasketMetadata[];

    constructor() {
    }

    ngOnInit(): void {
        this.basketProducts = JSON.parse(localStorage.getItem('sepet')) || [];
        console.log(this.basketProducts)
    }

}
