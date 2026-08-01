import { Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);
  items = this.itemsSignal.asReadonly();


  constructor() {
  }

  addPizza(pizza:{name:string; image:string;price:number, type:'veg'|'nonveg'}):void{
    const newItem:CartItem ={
      cartId:crypto.randomUUID(),
      name:pizza.name,
      image:pizza.image,
      price:pizza.price,
      type:pizza.type,
      qty:1
    };

    this.itemsSignal.update((current)=>[...current,newItem]);
  }

}
