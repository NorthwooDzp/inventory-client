import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components';


const routes: Routes = [
    {
        path: '',
        component: InventoryComponent,
        children: [
            {
                path: 'storage',
                loadChildren: () => import('./modules/storage/storage.module').then(mod => mod.StorageModule)
            },
            {
                path: 'employee',
                loadChildren: () => import('./modules/employee/employee.module').then(mod => mod.EmployeeModule)
            },
            {
                path: '**',
                redirectTo: 'employee'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
