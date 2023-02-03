import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData(){
    return{
      name:"nisha",
      age:54,
      id:90
    }
  }
}
