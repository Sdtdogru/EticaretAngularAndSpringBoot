import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductOperationsComponent} from './product-operations/product-operations.component';
import {ProductAddComponent} from './product-add/product-add.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'productoperations',
                component: ProductOperationsComponent,
                data: {
                    title: 'productoperations'
                }
            },
            {
                path: 'productadd',
                component: ProductAddComponent,
                data: {
                    title: 'productoperations'
                }
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
