import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './services';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
