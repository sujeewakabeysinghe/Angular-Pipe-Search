import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    timeOut: 2000,
    positionClass: 'toast-top-right',
    progressBar:true,
    progressAnimation:"increasing",
    preventDuplicates: false,
    closeButton:false,
    easing:'ease-in',
    easeTime:800,
    tapToDismiss:true,
    maxOpened:5
    }),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
