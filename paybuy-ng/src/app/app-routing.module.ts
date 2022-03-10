import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AddCustomerComponent } from './customer/add/add.component';
import { SearchCustomerComponent } from './customer/search/search.component';
import { DetailsCustomerComponent } from './customer/details/details.component';
import { UpdateCustomerComponent } from './customer/update/update.component';
import { DeleteCustomerComponent } from './customer/delete/delete.component';
import { SuccessCustomerComponent } from './customer/success/success.component';
import { ErrorCustomerComponent } from './customer/error/error.component';

const routes: Routes = [
	
	{ path: '', redirectTo:'menu', pathMatch: 'full' },
	{ path: 'menu', component: MenuComponent },
 	{ path: 'customer/add', component: AddCustomerComponent },
 	{ path: 'customer/search', component: SearchCustomerComponent },
 	{ path: 'customer/details/:idcustomer', component: DetailsCustomerComponent },
 	{ path: 'customer/update/:idcustomer', component: UpdateCustomerComponent },
 	{ path: 'customer/delete/:idcustomer', component: DeleteCustomerComponent },
 	{ path: 'customer/success', component: SuccessCustomerComponent },
 	{ path: 'customer/error', component: ErrorCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
