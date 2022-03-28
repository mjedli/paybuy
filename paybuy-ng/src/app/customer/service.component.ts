import { Injectable } from '@angular/core';
import { Customer } from './model/customer';
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
export class CustomerService {

  	private usersUrl: string;

 	constructor(private http: HttpClient) {
    	this.usersUrl = 'http://localhost:8080/paybay/customer';
 	}

  list  : Customer[] = [
    {id : "14646464654645464", name : "Google Play Advertising 2022", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit:3520.50},
    {id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit:320},
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
  public addCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/paybay/customer/add", customer, httpOptions);

  }
  
  /*
  * getComponentByCurrentId
  */
  public getCustomerByCurrentId():Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8080/paybay/customer/"+this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */
  public modifiyCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/paybay/customer/update", customer, httpOptions);
  }

  /*
  * removeComponent
  */
  public removeCustomer(customer:Customer):Observable<number> {
    return this.http.post<number>("http://localhost:8080/paybay/customer/remove", customer, httpOptions);
  }

  /*
  * getAllComponent
  */
  public getSearchCustomers():Observable<Customer[]> {
    return this.http.post<Customer[]>("http://localhost:8080/paybay/customer", this.searchValue, httpOptions);
  }
}