import { Injectable } from '@angular/core';
import { Provider } from './model/provider';
import { Customer } from '../customer/model/customer';
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
export class ProviderService {

  	private usersUrl: string;

 	constructor(private http: HttpClient) {
    	this.usersUrl = 'http://localhost:8080/paybay/customer';
 	}

  listProvider  : Provider[] = [
    {id : "165464654646666", name : "Google Play Advertising", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
    {id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
  ];

  list  : Customer[] = [
    {id : "1", name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit : 2350.50},
    {id : "2", name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1", credit: 3520.25},
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
  public addProvider(provider:Provider):Observable<Provider> {
    return this.http.post<Provider>("http://localhost:8080/paybay/provider/add", provider, httpOptions);

  }
  
  /*
  * getComponentByCurrentId
  */
  public getProviderByCurrentId():Observable<Provider> {
    return this.http.get<Provider>("http://localhost:8080/paybay/provider/"+this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */
  public modifiyProvider(provider:Provider):Observable<Provider> {
    return this.http.post<Provider>("http://localhost:8080/paybay/provider/update", provider, httpOptions);
  }

  /*
  * removeComponent
  */
  public removeProvider(provider:Provider):Observable<number> {
    return this.http.post<number>("http://localhost:8080/paybay/provider/remove", provider, httpOptions);
  }

  /*
  * getAllComponent
  */
  public getSearchProviders():Observable<Provider[]> {
    return this.http.post<Provider[]>("http://localhost:8080/paybay/provider", this.searchValue, httpOptions);
  }
}