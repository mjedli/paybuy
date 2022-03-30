import { Injectable } from '@angular/core';
import { Product } from './model/product';
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
export class StockService {

  	private usersUrl: string;

 	constructor(private http: HttpClient) {
    	this.usersUrl = 'http://localhost:8080/paybay/customer';
 	}

  listProduct  : Product[] = [];
  
  list  : Customer[] = [];

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
	public addProduct(product: Product):Observable<Product> {
	   	return this.http.post<Product>("http://localhost:8080/paybay/stock/add", product, httpOptions);
	}
  
  /*
  * getComponentByCurrentId
  */
  public getProductByCurrentId():Observable<Product> {
    return this.http.get<Product>("http://localhost:8080/paybay/stock/"+this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */

  public modifiyProduct(product:Product):Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/paybay/stock/update", product, httpOptions);
  }

  /*
  * removeComponent
  */

  public removeProduct(product:Product):Observable<number> {
    return this.http.post<number>("http://localhost:8080/paybay/stock/remove", product, httpOptions);
  }

  /*
  * getAllComponent
  */
  public getSearchProduct():Observable<Product[]> {
    return this.http.post<Product[]>("http://localhost:8080/paybay/stock", this.searchValue, httpOptions);
  }
  
  /*
  * getAllComponent with 0 amount
  */
  public getSearchProductNotEmpty():Observable<Product[]> {
    return this.http.post<Product[]>("http://localhost:8080/paybay/stock/notempty", this.searchValue, httpOptions);
  }
  
  /*
  * getSearchEmptyProduct
  */
  public getSearchEmptyProduct():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/paybay/stock/empty",httpOptions);
  }

}