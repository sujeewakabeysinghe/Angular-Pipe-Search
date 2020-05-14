import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    preventDuplicates: true,
    closeButton:false,
    easing:'ease-in',
    easeTime:800,
    tapToDismiss:true,
    maxOpened:5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
