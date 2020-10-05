import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ModalWindowModule } from '../../../common-features/modal-window/modal-window.module';
import {
    CreateEditEmployeeComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent
} from './components';


@NgModule({
    declarations: [
        EmployeesListComponent,
        CreateEditEmployeeComponent,
        EmployeeDetailsComponent
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
