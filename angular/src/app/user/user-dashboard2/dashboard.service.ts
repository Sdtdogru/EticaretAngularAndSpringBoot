import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductMetadata} from './product.metadata';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    public sepet = [];
    productUrl = 'http://localhost:3000/products';

    productsService: ProductMetadata;

    constructor(private httpClient: HttpClient) {
    }

    getProductId(id) {
        this.httpClient.get<ProductMetadata>('http://localhost:8080/public/category/' + id).subscribe(res => {
            console.log(JSON.stringify(res), 'sedat') , this.productsService = res
        });
    }


}
