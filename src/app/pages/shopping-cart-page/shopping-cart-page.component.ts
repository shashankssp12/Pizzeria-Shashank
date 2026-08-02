import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart-page',
  imports: [],
  templateUrl: './shopping-cart-page.component.html',
  styleUrl: './shopping-cart-page.component.css'
})
export class ShoppingCartPageComponent {
  cart = inject(CartService)
  

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
  
}
