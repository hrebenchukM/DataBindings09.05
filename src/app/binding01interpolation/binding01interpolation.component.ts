import { Component, OnInit } from '@angular/core';

class Product
{
  img:string="";
  text:string;
  Name:string;
  constructor()
  {
    this.text="";
    this.Name="";
  }
}



@Component({
  selector: 'app-binding01interpolation',
  templateUrl: './binding01interpolation.component.html',
 // styleUrls: ['./binding01property.component.css'],
  standalone: true
})
export class Binding01InterpolationComponent implements OnInit {
  Arr:Product[]=[];//HW






  // propertyOne: string = 'Hello';
  // propertyTwo:Number = 111;
  // propertyBool:Boolean = true;
  // propertyObj1  = {};//обьект
  // propertyObj2  = {//обьект с полем
  //   prop1: 'some value'
  // };
  // Age:number=30;

  // emptyProp:number=0;
  // notEmptyProp;//поле не инициализированное

  constructor() {
    
    // this.notEmptyProp = 'not empty';//инициализация поля
    // this.startInterval();



//////////////////////////////////////HW////////////////////////////////////
    this.Arr.push(new Product);
    this.Arr[0].Name="Laptops";   
    this.Arr[0].img="../../assets/planshety.png";
    
    this.Arr.push(new Product);
    this.Arr[1].Name="Computers";    
    this.Arr[1].img="../../assets/kompyutery.png";
    
    this.Arr.push(new Product);
    this.Arr[2].Name="Monitors";   
    this.Arr[2].img="../../assets/monitory.png";
    
    this.Arr.push(new Product);
    this.Arr[3].Name="Gaming";   
    this.Arr[3].img="../../assets/tovary-dlya-gejmerov.png";
    
    this.Arr.push(new Product);
    this.Arr[4].Name="Tablets";   
    this.Arr[4].img="../../assets/planshety.png";
    
    this.Arr.push(new Product);
    this.Arr[5].Name="Cables & Adapters";   
    this.Arr[5].img="../../assets/kabeli-i-perekhodniki.png";
    
    this.Arr.push(new Product);
    this.Arr[6].Name="Computer Parts";    
    this.Arr[6].img="../../assets/kompyuternye-komplektuyushchie.png";
    this.Arr[6].text="";

    this.Arr.push(new Product);
    this.Arr[7].Name="Networking Equipment";    
    this.Arr[7].img="../../assets/setevoe-oborudovanie.png";
    this.Arr[7].text="";
    
    this.Arr.push(new Product);
    this.Arr[8].Name="Headphones";   
    this.Arr[8].img="../../assets/naushniki-i-aksessuary.png";
    this.Arr[8].text="";
    
    this.Arr.push(new Product);
    this.Arr[9].Name="Keyboard & mouse";    
    this.Arr[9].img="../../assets/klaviatury-i-myshi.png";
    this.Arr[9].text="";
    
    this.Arr.push(new Product);
    this.Arr[10].Name="Accessories";    
    this.Arr[10].img="../../assets/aksessuari-dlia-elektronyky.png";
    this.Arr[10].text="";
    
    this.Arr.push(new Product);
    this.Arr[11].Name="Printers";    
    this.Arr[11].img="../../assets/ofisnaya-tekhnika.png";
    this.Arr[11].text="";
    
//////////////////////////////////////HW////////////////////////////////////

  }

  // returnStringMethod(){
  //   return 'hello some string text';
  // }

  // counter: number = 0;
  // startInterval()
  // {
  //   setInterval(()=>{
  //     this.counter++;
  //   }, 1000)
  // }
  // GetAge()
  // {
  //   return this.Age;
  // }

  ngOnInit() {

  }
}
