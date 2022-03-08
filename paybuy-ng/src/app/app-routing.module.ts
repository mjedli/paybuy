import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
	
	{ path:'', redirectTo:'menu', pathMatch: 'full' },
	{ path: 'menu', component: MenuComponent },
 	{ path: 'customer', component: CustomerComponent }
 	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
