import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { item, ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
   encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{
products:item[]=[];
  route: any;
constructor(private itemservice:ItemsService){

}
ngOnInit():void{
      
  this.itemservice.getItems().subscribe({
    next:(data)=>this.products=data,
    error:(err)=>console.error('error',err)
  })
   
}
selectvalue?:item;
popup:boolean=false;
getvalue(id:number){
  console.log(id);
  this.selectvalue=this.products.find((p)=>p.id===id)
  this.popup=true;
}
cancelbtn(){
  this.popup=false
}
product?:item;
message!:string;
ordernow() {
  alert('ordered successfully')
}
  
}

