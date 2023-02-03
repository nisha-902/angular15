import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { property } from './property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  allProperty:any;
  formValue!:FormGroup;
  PropertyModelObj:property=new property();
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private fb:FormBuilder, private api:PropertyService){}
  ngOnInit():void{
    this.formValue=this.fb.group({
      ptitle:[''],
      pprice:[''],
      plocation:[''],
      pdetails:['']
    })
   this.getAllProperty()
  }
  clickAddProp(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  getAllProperty(){
    this.api.getAllProp().subscribe((res)=>{
      this.allProperty=res;
      console.log(this.allProperty)
    })

  }
 //addproperty
  addProp(){
    this.PropertyModelObj.ptitle=this.formValue.value.ptitle;
    this.PropertyModelObj.pprice=this.formValue.value.pprice;
    this.PropertyModelObj.plocation=this.formValue.value.plocation;
    this.PropertyModelObj.pdetails=this.formValue.value.pdetails;
    // console.log(this.PropertyModelObj)
    this.api.addListing(this.PropertyModelObj).subscribe((res)=>{
      console.log(res);
      alert("recorded successfully")
      let ref=document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProperty();
    })



  }
  deletProp(data:any){
    this.api.deleteProp(data.id).subscribe((res)=>{
      alert("deleted successfully")
      this.getAllProperty()
    })
  }

  onEdit(data:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.PropertyModelObj.id=data.id;
    this.formValue.controls['ptitle'].setValue(data.ptitle);
    this.formValue.controls['pprice'].setValue(data.pprice);
    this.formValue.controls['plocation'].setValue(data.plocation);
    this.formValue.controls['pdetails'].setValue(data.pdetails)
  }
 //update
 updatProp(){
  this.PropertyModelObj.ptitle=this.formValue.value.ptitle;
    this.PropertyModelObj.pprice=this.formValue.value.pprice;
    this.PropertyModelObj.plocation=this.formValue.value.plocation;
    this.PropertyModelObj.pdetails=this.formValue.value.pdetails;
    this.api.updateProp(this.PropertyModelObj,this.PropertyModelObj.id).subscribe((res)=>{
      alert("updated successfully")
      let ref=document.getElementById('clear');
      ref?.click()
      this.formValue.reset();
      this.getAllProperty();
    })

 }

}
