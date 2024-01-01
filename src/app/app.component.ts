import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer_App';

  customer:Customer = new Customer("","","");
  customers:Customer[] = [];


   constructor(private customerService:CustomerService){
      this.customerService = customerService;
   } 
  saveCustomer(){
    //calling method from service class
    this.customerService.printMsg(this.customer);
    // console.log(this.customer);//print customer object on browser console
    //push the customer object into array
    this.customers.push(this.customer);
    //making customer object empty
    this.customer = new Customer("","","");
  }
}
