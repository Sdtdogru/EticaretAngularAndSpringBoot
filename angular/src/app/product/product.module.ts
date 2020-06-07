import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductOperationsComponent} from './product-operations/product-operations.component';
import {ProductRoutingModule} from './product-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ProductOperationsComponent, ProductAddComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule
    ]
})
export class ProductModule {
}
