import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent, NaviComponent } from './components';


@NgModule({
    declarations: [InventoryComponent, NaviComponent],
    imports: [
        CommonModule,
        InventoryRoutingModule,
        PerfectScrollbarModule
    ]
})
export class InventoryModule {
}
