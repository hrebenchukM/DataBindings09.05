


import { Component ,OnInit} from '@angular/core';









class Person
{
  Name:string;
  Surname:string;
  DateOfBirth:string;
  Email:string;
  Phone:string;
  Adress:string;
  MaritalStatus:string;

  img:string="../../assets/Фото.jpg";
  constructor()
  {
    this.Name="";
    this.Surname="";
    this.DateOfBirth="";
    this.Email="";
    this.Phone="";
    this.Adress="";
    this.MaritalStatus="";
  }
}

class Education
{
  School:string;
  University:string;
  constructor()
  {
    this.School="";
    this.University="";
  }
}


class SkillsCertificates
{
  Skills:string[];
  Position:string[];
  Certificates:string[];
  constructor()
  {
    this.Position=[];
    this.Skills=[];
    this.Certificates=[];
  }
}


class Experience
{
  Position:string;
  Company:string;
  Duration:string;
  constructor()
  {
    this.Position="";
    this.Company="";
    this.Duration="";
  }
}


class Languages
{
  Language:string[];
  Level:string[];
  constructor()
  {
   
    this.Level=[];
    this.Language=[];
  }
}



class Links
{
  GitHub:string;
  LinkedIn:string;
  Twitter:string;
  Certificates:string;
  constructor()
  {
    this.GitHub="";
    this.LinkedIn="";
    this.Twitter="";
    this.Certificates="";
  }
}




@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent implements OnInit {
  ArrP:Person[]=[];//HW
  ArrEd:Education[]=[];
  ArrSc:SkillsCertificates[]=[];
  ArrEx:Experience[]=[];
  ArrLg:Languages[]=[];
  ArrLk:Links[]=[];
  
  

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
    this.ArrP.push(new Person);
    this.ArrP[0].Name="Mariia";  
    this.ArrP[0].Surname="Hrebenchuk";  
    this.ArrP[0].DateOfBirth="10.12.2004";  
    this.ArrP[0].Email="mary101204@gmail.com";  
    this.ArrP[0].Phone="+380972860460"; 
    this.ArrP[0].Adress="Odesa, Ukraine"; 
    this.ArrP[0].MaritalStatus="single"; 
    this.ArrP[0].img="../../assets/Фото.jpg";
    
 

    this.ArrEd.push(new Education);
    this.ArrEd[0].School="Odesa comprehensive school №1 |-||| degrees of Odesa region, 11 classes."; 
    this.ArrEd[0].University="Private institution of higher education Odesa Technological University 'STEP', 2st year;";


    this.ArrSc.push(new SkillsCertificates);
    this.ArrSc[0].Skills=['C++','HTML/CSS','JavaScript'];
    this.ArrSc[0].Position=["Intern developer","Intern developer","Intern developer"];
    this.ArrSc[0].Certificates=["Cisco"];

    

    this.ArrEx.push(new Experience);
    this.ArrEx[0].Position="-";
    this.ArrEx[0].Company="-";
    this.ArrEx[0].Duration="-";

    this.ArrLg.push(new Languages);
    this.ArrLg[0].Language=["Ukrainian","Russian", "English", "Polish"];
    this.ArrLg[0].Level=["C2","C2","B1","A2"];


    this.ArrLk.push(new Links);
    this.ArrLk[0].GitHub="https://github.com/hrebenchukM";
    this.ArrLk[0].LinkedIn="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%B3%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D1%87%D1%83%D0%BA-6458972b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    this.ArrLk[0].Twitter="-";
    this.ArrLk[0].Certificates="https://www.netacad.com/portal/learning";

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




