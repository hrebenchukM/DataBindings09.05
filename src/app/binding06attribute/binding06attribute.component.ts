import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding06attribute',
  standalone: true,
  templateUrl: './binding06attribute.component.html',
  styleUrls: ['./binding06attribute.component.css']
})
export class Binding06AttributeComponent implements OnInit {


    colSpan = 3;
    interpolationContent = 'main'
    textInfomation = 'some info text'

    fillColor:string="black";
    
    SetColor(col:any){
   this.fillColor=col;
    }
    valueR: number = 40;
    colorR:string = 'red';
    

    increase() {
        this.valueR++;
    }

    decrease() {
        this.valueR--;
    }


  ngOnInit(): void {
  }

}
