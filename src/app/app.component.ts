import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria_shashank';

   cartService = inject(CartService)


} 
