import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEditEmployeeComponent, EmployeesListComponent } from './components';
import { ModalWindowModule } from '../../../common-features/modal-window/modal-window.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        EmployeesListComponent,
        CreateEditEmployeeComponent
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ModalWindowModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        NgScrollbarModule
    ]
})
export class EmployeeModule {
}
