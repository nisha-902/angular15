import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor( private http:HttpClient) { }
  //add get ,put , update and delete method
  addListing(data:any){
    return this.http.post("http://localhost:3000/propertiesPage",data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
  //get all properties using get method
  getAllProp(){
    return this.http.get("http://localhost:3000/propertiesPage").pipe(map((res:any)=>
    {
      return res;
    }))
  }
  //update using put method
  updateProp(data:any,id:number){
    return this.http.put("http://localhost:3000/propertiesPage/"+id,data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
  //delete
  deleteProp(id:number){
    return this.http.delete("http://localhost:3000/propertiesPage/"+id).pipe(map((res:any)=>
    {
      return res;
    }))
  }
  //service part done
  
}
