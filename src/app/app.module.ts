import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppUiComponent } from './app.ui.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule
    ],
    declarations: [
        // AppComponent
        AppUiComponent
    ],
    // bootstrap: [ AppComponent ]
    bootstrap: [ AppUiComponent ]
})
export class AppModule { }
