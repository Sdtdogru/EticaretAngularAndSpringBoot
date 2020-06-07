import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductMetadata} from '../../user/user-dashboard2/product.metadata';
import {ProductoperationsMetadate} from '../../product/product-operations/productoperations-metadate';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private urlProductPost = 'http://localhost:8080/private/product';
    productMetadata: ProductMetadata;
    public httpHeadrs = {
        headers: new HttpHeaders(
            {'Authorization': 'bearer ' + localStorage.getItem('access_token')}
        )
    }

    constructor(private httpClient: HttpClient) {
    }


    addProduct(input) {

        return this.httpClient.post(this.urlProductPost, input, this.httpHeadrs);
    }

    getProduct() {
        return this.httpClient.get<ProductoperationsMetadate>('http://localhost:8080/public/product');
    }

    updateProduct(input) {
        return this.httpClient.post(this.urlProductPost, input, this.httpHeadrs);
    }

    deleteProduct(id) {
       return this.httpClient.delete('http://localhost:8080/private/product/' + id, this.httpHeadrs)
    }

}
