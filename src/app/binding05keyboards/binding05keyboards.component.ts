import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding05keyboards',
  standalone: true,
  templateUrl: './binding05keyboards.component.html'
})
export class Binding05KeyboardsComponent implements OnInit {

  massage = 'Простой текст';


  show(text:string){
    this.massage = text;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
