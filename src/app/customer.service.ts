import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  printMsg(customer:Customer){
    console.log("Hello, My Dear Customer", customer);
  }
}
