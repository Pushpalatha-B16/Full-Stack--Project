import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
     encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
sidebar!:boolean;

handlesidebar(){
  this.sidebar=true;
  console.log("side")
}
handleclosebar(){
   this.sidebar=false;
   console.log("side false")
}
}
