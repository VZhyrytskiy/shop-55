import { NgModule } from '@angular/core';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  exports: [CartListComponent],
  imports: [SharedModule, CartRoutingModule],
})
export class CartModule {}
