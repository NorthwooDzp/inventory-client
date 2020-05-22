import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEditEmployeeComponent, EmployeesListComponent } from './components';
import { ModalWindowModule } from '../../../common-features/modal-window/modal-window.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



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
        MatButtonModule
    ]
})
export class EmployeeModule {
}
