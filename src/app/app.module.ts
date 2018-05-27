import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { AppRoutingModule } from './/app-routing.module';
import { DownloadService } from './_services/download.service';

@NgModule({
    declarations: [
        AppComponent,
        DownloadComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        DownloadService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
