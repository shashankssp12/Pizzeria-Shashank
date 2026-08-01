import { Component, inject } from '@angular/core';
import { PIZZA_DATA } from '../../data/pizza-data';
import { Pizza } from '../../models/pizza.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-pizza-page',
  imports: [],
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css'
})
export class OrderPizzaPageComponent {

  // Bringing pizza data
  pizzas:Pizza[] = PIZZA_DATA;
  
  //Bringing CartService, so that we can add the pizza via form
  private cartService = inject(CartService);
  
  // 
  addToCart(pizzaObj:Pizza){
    this.cartService.addPizza(pizzaObj);
    console.log(this.cartService.items().length);
    alert("Pizza added to Cart!")

  }

}
