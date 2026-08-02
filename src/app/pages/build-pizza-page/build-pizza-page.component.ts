import { Component, inject } from '@angular/core';
import { INGREDIENTS_DATA } from '../../data/ingredients-data';
import { Ingredients } from '../../models/ingredients';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-build-pizza-page',
  imports: [],
  templateUrl: './build-pizza-page.component.html',
  styleUrl: './build-pizza-page.component.css'
})
export class BuildPizzaPageComponent {
  cartSingal = inject(CartService)
  //getting ingredient list
  ingredients_data: Ingredients[] = INGREDIENTS_DATA
  // name 
  

}
