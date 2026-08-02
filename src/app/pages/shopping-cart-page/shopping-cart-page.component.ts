import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-page',
  imports: [],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent {
  cart = inject(CartService)
  router = inject(Router);

  showData(){
    console.log(this.cart.items());
  }
  increaseItem(id:string){
    this.cart.increaseQty(id);
  }
  decreaseItem(id:string){
    this.cart.decreaseQty(id);
  }
  deleteThisItem(id:string){
    this.cart.deleteItem(id);
  }
  

  pizzaSubtotal(){
    return this.cart.items().reduce((sum,obj)=> obj.type?sum+(obj.price*obj.qty):sum ,0);
  }
    customPizzaSubtotal(){
    return this.cart.items().reduce((sum,obj)=> !obj.type?sum+(obj.price*obj.qty):sum ,0);
  }
  grandTotal(){
    return this.pizzaSubtotal() + this.customPizzaSubtotal();
  }
  payCart(){
    if(this.grandTotal()>0){
      alert("Thanks for shopping!\n You paid total amount of "+this.grandTotal());
      this.allClear();
      this.router.navigate(['order-pizza']);
    }
    else{
      alert("Add items in your cart!")
    }
  }
  allClear(){
    this.cart.clearCartData();
  }

}
