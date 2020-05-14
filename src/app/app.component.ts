import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-search';
  constructor(
    private toastr:ToastrService
  ){}
  showToastr(){
    console.log("toastr");
    this.toastr.success('Hello world!');
    this.toastr.warning('Hello world!', 'Toastr fun!');
    this.toastr.error('Hello world!', 'Toastr fun!');
    this.toastr.info('Hello world!', 'Toastr fun!');
  }
}
