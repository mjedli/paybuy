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

import { AddProductComponent } from './stock/add/add.component';
import { SearchAddProductComponent } from './stock/searchadd/searchadd.component';
import { SearchProductComponent } from './stock/search/search.component';
import { EmptyProductComponent } from './stock/empty/empty.component';
import { DetailsProductComponent } from './stock/details/details.component';
import { UpdateProductComponent } from './stock/update/update.component';
import { DeleteProductComponent } from './stock/delete/delete.component';
import { SuccessProductComponent } from './stock/success/success.component';
import { ErrorProductComponent } from './stock/error/error.component';

import { SearchAddInvoiceComponent } from './invoice/searchadd/searchadd.component';
import { SearchInvoiceComponent } from './invoice/search/search.component';
import { SearchDateInvoiceComponent } from './invoice/searchdate/searchdate.component';
import { AddInvoiceComponent } from './invoice/add/add.component';
import { SuccessInvoiceComponent } from './invoice/success/success.component';
import { InvoiceComponent } from './invoice/invoice/invoice.component';


import { CustomerService } from './customer/service.component';
import { StockService } from './stock/service.component';
import { ProviderService } from './provider/service.component';
import { InvoiceService } from './invoice/service.component';



@NgModule({
  declarations: [
    AppComponent, ToolbarComponent, FooterComponent, MenuComponent, 
    
    AddCustomerComponent, 
    SearchCustomerComponent,
    DetailsCustomerComponent, 
    UpdateCustomerComponent, 
    DeleteCustomerComponent, 
    SuccessCustomerComponent,
    ErrorCustomerComponent,
    
    AddProductComponent,
    SearchAddProductComponent,
    SearchProductComponent,
    EmptyProductComponent,
    DetailsProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    SuccessProductComponent,
    ErrorProductComponent,
    
    SearchAddInvoiceComponent,
    AddInvoiceComponent,
    SuccessInvoiceComponent,
    SearchInvoiceComponent,
    SearchDateInvoiceComponent,
    InvoiceComponent
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [CustomerService, StockService, ProviderService, InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
