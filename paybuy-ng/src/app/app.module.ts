import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AddCustomerComponent } from './customer/add/add.component';
import { SearchCustomerComponent } from './customer/search/search.component';
import { DetailsCustomerComponent } from './customer/details/details.component';
import { UpdateCustomerComponent } from './customer/update/update.component';
import { DeleteCustomerComponent } from './customer/delete/delete.component';
import { SuccessCustomerComponent } from './customer/success/success.component'
import { ErrorCustomerComponent } from './customer/error/error.component';


import { CustomerService } from './customer/service.component';


@NgModule({
  declarations: [
    AppComponent, ToolbarComponent, FooterComponent, MenuComponent, AddCustomerComponent, SearchCustomerComponent,
    DetailsCustomerComponent, UpdateCustomerComponent, DeleteCustomerComponent, SuccessCustomerComponent,
    ErrorCustomerComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
