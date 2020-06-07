import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ProductoperationsMetadate} from './productoperations-metadate';

@Component({
    selector: 'app-product-operations',
    templateUrl: './product-operations.component.html',
    styleUrls: ['./product-operations.component.css']
})
export class ProductOperationsComponent implements OnInit {
    productMetadata: ProductoperationsMetadate;
    prodoctId: number;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.productService.getProduct().subscribe(res => {
            this.productMetadata = res});
    }

    updateProduct(id) {
        this.prodoctId = id;
        console.log(this.prodoctId);
    }

    saveProduct(input) {
        console.log(JSON.stringify(input));
        this.productService.updateProduct(input).subscribe(res => {
             this.ngOnInit()
        });
        this.prodoctId = null;

    }

    delete(id) {
        this.productService.deleteProduct(id).subscribe(res => {this.ngOnInit()})
    }

    giveUp() {
        this.prodoctId = null;
    }
}
