import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path:string ="../assets/2.jpg";
  cname:string="special";
  d:string=new Date().toLocaleTimeString();

  timeid=setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  },1000)

  isDisabled:boolean=true;
  isHidden:boolean=false;

  isActive:boolean=true;
  cvar:string="grey";
  cvar1:string="orange";
  mystyle:object={
    color:'pink',
    background:'grey',
    border:'5px solid black'
  }
  counter:number=0;
  increment(){
     this.counter++;
  }
  decrement(){
    this.counter--;
 }
 name="xyz";
 changeName(n:any){
  console.log(n);
  console.log(n.target);
  console.log(n.target.value);
 }
 city:string="Hyderabad";
 showHead=["Hyderabad","Bangalore","Delhi"];
 nums=[1,2,4,5,6,7,8,9,20];
 num1:number=4;
 num2:number=5;
 op:string='%';

 n="sahithi revanth bellam";
 salary=67000;
 person={
  'name':'sahithi',
  'age':23,
  'salary':60000
 }
 dob=new Date();
 num=0.98;

 wish="Hello good morning";
}
