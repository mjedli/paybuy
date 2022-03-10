import { Injectable } from '@angular/core';
import { Customer } from './model/customer';

@Injectable()
export class CustomerService {

  constructor() { }

  list  : Customer[] = [
    {id : 1, name : "Google", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
    {id : 2, name : "Yahoo", firstname : "Jedli", lastname : "Mejdi", birthday : "02/02/1986", mobile : "985986760", address : "address 1"},
  ];

  currentIdSelected:number = 0;
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
  public setCurrentIdSelected(currentNumber:number) {
    this.currentIdSelected = currentNumber;
  }

  /*
  * addComponent
  */
  public addCustomer(customer:Customer):void {

    let currentId = 1;

    let index = this.list.findIndex((e) => e.id === currentId);

    while(index !== -1) {
      currentId = currentId +1;
      index = this.list.findIndex((e) => e.id === currentId);
    }
    customer.id=currentId;
    this.list.push(customer);

  }

  /*
  * getComponentByCurrentId
  */
  public getCustomerByCurrentId():Customer {
    return this.list.find(x => x.id == this.currentIdSelected)!;
  }

  /*
  * modifiyComponent
  */
  public modifiyCustomer(customer:Customer):void {
    const index = this.list.findIndex((e) => e.id === customer.id);

    if (index === -1) {
        this.list.push(customer);
    } else {
        this.list[index] = customer;
    }
  }

  /*
  * removeComponent
  */
  public removeCustomer() {
    const index = this.list.findIndex((e) => e.id === this.currentIdSelected);

    if (index !== -1) {
        this.list.splice(index, 1);
    }
    this.currentIdSelected = 0; 
  }

  /*
  * getAllComponent
  */
  public getSearchCustomers():Customer[] {
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
}