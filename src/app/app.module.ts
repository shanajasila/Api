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

const myROute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },{
    path:"uspublic",
    component:UsPublicComponent
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
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myROute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
