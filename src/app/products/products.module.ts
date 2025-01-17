import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import {PrimeNgModule} from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component'
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly-pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    UncommonPageComponent,
    NumbersPageComponent,
    OrderComponent,

    //Pipes
    ToogleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,

  ]
})
export class ProductsModule { }
