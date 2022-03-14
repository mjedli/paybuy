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

  id:string;
  name:string;
  amount:string;
  buyingPrice:string;
  sellPrice:string;
  TVA:string;
  profit:string;

  listProduct  : Product[] = [
    {id : "144654646546546646", name : "Google Play", amount : "80", buyingPrice : "8.50", sellPrice : "9.50", TVA : "5", profit : "1500"},
    {id : "2", name : "Google Play Advertising", amount : "180", buyingPrice : "8.50", sellPrice : "19.50", TVA : "7", profit : "1500"},
    {id : "3", name : "Google Play Game and tools", amount : "1180", buyingPrice : "8.50", sellPrice : "119.50", TVA : "6", profit : "1500"},
  ];
  
  list  : Customer[] = [
    //{id : "1", name : "Google Play", amount : "80", buyingPrice : "8.50", sellPrice : "9.50", TVA : "5", profit : "1500"},
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


  public addProductOLD(customer:Product):void {

    let currentId = "1";

    let index = this.listProduct.findIndex((e) => e.id === currentId);

    while(index !== -1) {
      currentId = currentId +1;
      index = this.list.findIndex((e) => e.id === currentId);
    }
    customer.id=currentId;
    this.listProduct.push(customer);
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
  public getProductByCurrentIdOLD():Product {
    return this.listProduct.find(x => x.id == this.currentIdSelected)!;
  }
  
  public getCustomerByCurrentId():Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8080/paybay/customer/"+this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */
  public modifiyCustomerOLD(product:Product):void {
    const index = this.listProduct.findIndex((e) => e.id === product.id);

    if (index === -1) {
        this.listProduct.push(product);
    } else {
        this.listProduct[index] = product;
    }
  }

  public modifiyCustomer(customer:Customer):Observable<Customer> {
    return this.http.post<Customer>("http://localhost:8080/paybay/customer/update", customer, httpOptions);
  }

  /*
  * removeComponent
  */
  public removeCustomerOLD() {
    const index = this.listProduct.findIndex((e) => e.id === this.currentIdSelected);

    if (index !== -1) {
        this.listProduct.splice(index, 1);
    }
    this.currentIdSelected = "0"; 
  }

  public removeCustomer(customer:Customer):Observable<number> {
    return this.http.post<number>("http://localhost:8080/paybay/customer/remove", customer, httpOptions);
  }

  /*
  * getAllComponent
  */
  public getSearchCustomersOLD():Product[] {
    let list : Product[] = [];
    if(this.searchValue === "") {
      return this.listProduct;
    } else {
      list = this.listProduct.filter(
        e => ( (e.name.match(this.searchValue)) || (e.id.match(this.searchValue)))  
      );
      this.searchValue="";
      return list;
    }
  }
  
    /*
  * getAllComponent
  */
  public getSearchProductOLD():Product[] {
    return this.listProduct;
  }
  
    /*
  * getAllComponent
  */
  public getSearchCustomers():Observable<Customer[]> {
    return this.http.post<Customer[]>("http://localhost:8080/paybay/customer", this.searchValue, httpOptions);
  }
}