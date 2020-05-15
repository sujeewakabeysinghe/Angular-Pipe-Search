import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  colors=[
    'red',
    'blue',
    'white',
    'green',
    'black',
    'yellow',
    'pink'
  ];
  search:string

  constructor(
    private toastr:ToastrService
  ){}

  showToastr(){
    console.log("toastr");
    this.toastr.success('Hello world!', 'Toastr fun!');
    this.toastr.warning('Hello world!', 'Toastr fun!');
    this.toastr.error('Hello world!', 'Toastr fun!');
    this.toastr.info('Hello world!', 'Toastr fun!');
  }

}
