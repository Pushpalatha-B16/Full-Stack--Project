import { Component,OnInit ,ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemsService,item } from '../items.service';

@Component({
  selector: 'app-itemform',
  standalone: false,
  templateUrl: './itemform.component.html',
  styleUrl: './itemform.component.css',
    encapsulation: ViewEncapsulation.None
})
export class ItemformComponent {
newItems!:add
newproducts:item[]=[]
constructor(private itemservice:ItemsService){}
ngOnInit(){
  this.newItems={
  product_name:"",
  product_price:0,
  product_picture:null as File | null ,
  product_details:""
  }
    
}
onSubmit(form:NgForm):void{
  console.log('Form submitted!');
  console.log('Form values:', this.newItems);

 const formData = new FormData();

  formData.append('product_name', this.newItems.product_name);
  formData.append('product_price', this.newItems.product_price.toString());
  formData.append('product_details', this.newItems. product_details);

  if (this.newItems.product_picture) {
    formData.append('product_picture', this.newItems.product_picture);
  }
  
 
  this.itemservice.addItem(formData).subscribe({
    next:(response)=>{alert('new item added'),this.newproducts.push(response)},
    error:(err)=>alert('please fill all fields')
    
  });
   
}
onFileSelected(event: any) {
    this.newItems.product_picture = event.target.files[0] as File | null;
  }
   
}
class add{
  product_name!:string;
  product_price!:number;
   product_picture: File | null = null;
  product_details!:string;


}
