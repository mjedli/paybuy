import { Injectable } from '@angular/core';
import { Customer } from '../customer/model/customer';
import { Invoice } from './model/invoice';
import { SearchInvoice } from './model/SearchInvoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// #docregion http-options
const httpOptions = {
  headers: new HttpHeaders({
	'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class InvoiceService {

  	private usersUrl: string;

 	constructor(private http: HttpClient) {
    	this.usersUrl = 'http://localhost:8080/paybay/customer';
 	}

  listInvoice  : Invoice[] = [];
  
  list  : Customer[] = [
    {id : "14646464654645464", name : "Google Play Advertising 2022", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit:3520.50},
    {id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit:0},
  ];

  currentIdSelected:string = "0";
  searchValue:string = "";

  /*
  * setSearchValue
  */
  public setSearchValue(searchValue:string) {
    this.searchValue = searchValue;
  }

  /*
  * setCurrentIdSelected
  */
  public setCurrentIdSelected(currentNumber:string) {
    this.currentIdSelected = currentNumber;
  }

  /*
  * addComponent
  */
  public addCustomerOLD(customer:Customer):void {

    let currentId = "1";

    let index = this.list.findIndex((e) => e.id === currentId);

    while(index !== -1) {
      currentId = currentId +1;
      index = this.list.findIndex((e) => e.id === currentId);
    }
    customer.id=currentId;
    this.list.push(customer);
    
    this.http.post<Customer>("http://localhost:8080/paybay/customer/add", customer);

  }

  /*
  * addComponent
  */
  public addInvoice(invoice:Invoice):Observable<Invoice> {
    return this.http.post<Invoice>("http://localhost:8080/paybay/invoice/add", invoice, httpOptions);
  }

  /*
  * addComponent
  */
  public addCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/paybay/customer/add", customer, httpOptions);
  }
  
  /*
  * getComponentByCurrentId
  */
  public getCustomerByCurrentIdOLD():Customer {
    return this.list.find(x => x.id == this.currentIdSelected)!;
  }

  /*
  * getComponentByCurrentId
  */
  public getInvoiceByCurrentIdOLD():Invoice {
    return this.listInvoice.find(x => x.id == this.currentIdSelected)!;
  }
  
  public getCustomerByCurrentId():Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8080/paybay/customer/"+this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */
  public modifiyCustomerOLD(customer:Customer):void {
    const index = this.list.findIndex((e) => e.id === customer.id);

    if (index === -1) {
        this.list.push(customer);
    } else {
        this.list[index] = customer;
    }
  }

  public modifiyCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/paybay/customer/update", customer, httpOptions);
  }

  /*
  * removeComponent
  */
  public removeCustomerOLD() {
    const index = this.list.findIndex((e) => e.id === this.currentIdSelected);

    if (index !== -1) {
        this.list.splice(index, 1);
    }
    this.currentIdSelected = "0"; 
  }

  public removeCustomer(customer:Customer):Observable<number> {
    return this.http.post<number>("http://localhost:8080/paybay/customer/remove", customer, httpOptions);
  }

  /*
  * getAllComponent
  */
  public getSearchCustomersOLD():Customer[] {
    let list : Customer[] = [];
    if(this.searchValue === "") {
      return this.list;
    } else {
      list = this.list.filter(
        e => ( (e.firstname.match(this.searchValue)) || (e.lastname.match(this.searchValue)))  
      );
      this.searchValue="";
      return list;
    }
  }
  
  /*
  * getAllComponentByDate
  */
  public searchInvoicesByDate(searchInvoice:SearchInvoice):Observable<Invoice[]> {
    return this.http.post<Invoice[]>("http://localhost:8080/paybay/invoice/date", searchInvoice, httpOptions);
  }
  
  /*
  * getAllComponent
  */
  public getSearchCustomers():Observable<Customer[]> {
    return this.http.post<Customer[]>("http://localhost:8080/paybay/customer", this.searchValue, httpOptions);
  }
}