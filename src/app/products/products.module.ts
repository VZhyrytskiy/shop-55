import { NgModule } from '@angular/core';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
