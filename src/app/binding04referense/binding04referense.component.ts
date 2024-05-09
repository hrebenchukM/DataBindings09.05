import { Component, OnInit, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-binding04referense',
  standalone: true,
  templateUrl: './binding04referense.component.html'
})
export class Binding04ReferenseComponent implements OnInit {

  result = 0;
  show(a:number,b:number,c:number){
    for(let i = 0; i < arguments.length; i++){
      console.dir(arguments[i]);

      this.result += arguments[i];
    }

  }
   number:Number=0;
  Print(a:any)
  {
    this.number=a;
  }

  ngOnInit(): void {
  }

}
