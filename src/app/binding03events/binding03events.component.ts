import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding03events',
  standalone: true,
  templateUrl: './binding03events.component.html'
})
export class Binding03EventsComponent implements OnInit {


  counter: number = 1;

  increment(){
    this.counter++;
  }
  decrement(){
    if(this.counter>0)
      {
        this.counter--;
      }
    else
    {
      this.counter=0;
    }
  }


  // myConsoleEmpty(e){
  //   console.log(e);
  //     //  нет событийного объекта выводит undefined
  //     //  Выводит ошибку в консоле IDE VSCode
  // }
  consoleCounter(e:any){
    console.log(e);
  }
  consoleEventObj1(e:any){
    console.log(e);
    console.log(e.type);
  }
  consoleEventObjValue(e:any){
    console.log(e);
  }

  a = 'old ';
  b = 'text1';



  ngOnInit(){}
}
