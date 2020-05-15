import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule,MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ColorfilterPipe } from './colorfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorfilterPipe
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
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
