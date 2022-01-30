import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent, ProductViewComponent } from './components';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
