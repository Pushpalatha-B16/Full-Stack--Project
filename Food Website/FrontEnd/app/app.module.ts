import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemsService } from './items.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { ItemformComponent } from './itemform/itemform.component';
import {FormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';

const appRouter:Routes=[
   {path:'',component:NavbarComponent},
   {path:'home',component:HomeComponent},
  {path:'home/itemform',component:ItemformComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ItemformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule ,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
