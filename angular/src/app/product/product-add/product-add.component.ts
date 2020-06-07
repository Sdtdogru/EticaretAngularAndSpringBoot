import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {CATEGORYROUTES} from '../../user/user-navbar2/user-navbar2-routes.config';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    categorys: any[];
    categorys1: any[];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.categorys = CATEGORYROUTES;
        console.log(this.categorys)
    }

    productadd(inputs) {
        this.productService.addProduct(inputs).subscribe(res => {
            alert('eklendi');

        }, error => alert('eklenemedi !'));

    }

    getCategory(index) {
        this.categorys1 = index;
        console.log(JSON.stringify(index))

    }
}
