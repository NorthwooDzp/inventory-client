import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent, LoginComponent, RegisterComponent } from './components';
import { ShowHidePasswordDirective } from './directives';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AuthComponent,
        ShowHidePasswordDirective
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatInputModule,
        MatTabsModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
