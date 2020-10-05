import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent, EmployeesListComponent } from './components';


const routes: Routes = [
    {
        path: '',
        component: EmployeesListComponent,
    },
    {
        path: ':id',
        component: EmployeeDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
