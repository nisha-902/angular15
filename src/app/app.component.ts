import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';
import { UserserviceService } from './userservice.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';
interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}     

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9\.\_\-]+\@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,3}")]),
    password:new FormControl('')
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get emaill(){
    return this.loginForm.get("email")

  }
  // data='nisha';
  // name="nisha k"
  // getName(){
  //   return this.name
  // }
  // obj={
  //   name:"nisg",
  //   age:20
  // }
// SiteUrl=window.location.href
  // arr=["blue","red","bbb"]
  // ob={
  //   name:"nisha",
  //   age:22
  // }
  // getname(Name,sname){
  //   alert (Name)
  //   alert(sname)
  // }
  // myevent(val){
  //   console.warn(val)
  // }
  // name="nisha"
  // disablebox=true
  // enablebox(){

  //   this.disablebox=false
  // }
  // color="green"
  // data=["nisha","sandy","anil"]
  // data1=[
  //   {name:"anil",
  //   age:25
  //   },
  
  // {
  //   name:"sandy",
  //   age:24
  // }
  // ]
  // getUser(values){
  //   console.log(values)
  // }
  // col="red"
  // hii=false
  // ch(){
  //   this.col="blue"
  // }
  // // title1="skillbout";
  // data={
  //   name:"nisha",
  //   age:21
  // }
  // users=[
  //   {
  //     name:"nn",
  //     age:30,
  //     add:"manjhi"
  //   },
  //   {
  //     name:"bb",
  //     age:60,
  //     add:"bjnjhi"
  //   },
  //   {
  //     name:"jb",
  //     age:90,
  //     add:"gghjhi"
  //   }
  // ]
//   name="nisha"
//   today=Date.now()
//   str="hii nisha"
//   val=10
// data="n"
updateData(item){
  console.warn(item)
  this.data=item

}
// name='';
// age;
// id;
data:any=[];
constructor(private user:UserserviceService){
  this.user.getData().subscribe(data=>{
    this.data=data
  })
  // {
  //   let data=this.user.getData();
  //   this.name=data.name
  //   this.age=data.age
  //   this.id=data.id
  
  // }
}   
   
// getData(){
//   const data:dataType={
//     name:"nisha",
//     id:90,
//     indian:true,
//     address:"manjhi"
//   }
//   return data;
// }  
//    onsubmit(data){
//     console.log(data);

//    }
//  f(data){
//   console.log(data)
//  }

}