import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { PublicApiComponent } from './public-api/public-api.component';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ToDoComponent } from './to-do/to-do.component';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'

const myROute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },{
    path:"uspublic",
    component:UsPublicComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"userdata",
    component:UserdataComponent
  },
  {
    path:"todo",
    component:ToDoComponent
  },
  {
    path:"quote",
    component:QuoteComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsPublicComponent,
    PublicApiComponent,
    UserInfoComponent,
    ProductListComponent,
    UserdataComponent,
    ToDoComponent,
    QuoteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myROute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
