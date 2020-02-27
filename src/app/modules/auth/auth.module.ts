import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, RegisterComponent } from './components';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTabsModule
    ]
})
export class AuthModule {
}
