import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()comp;
  ngOnInit():void{
    console.log(this.comp)
  }

}
