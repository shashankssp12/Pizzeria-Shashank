import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);
  items = this.itemsSignal.asReadonly();



  constructor() {
  }

  addPizza(pizza:{name:string; id:string; image:string;price:number, type:'veg'|'nonveg'}):void{
    const existing = this.itemsSignal().find((item)=>item.pizzaId===pizza.id);
    if(existing){
      this.itemsSignal.update((items)=>items.map((item)=>item.pizzaId ===pizza.id?{...item, qty:item.qty+1}: item ))
    }else{
    const newItem:CartItem ={
      cartId:crypto.randomUUID(),
      pizzaId:pizza.id,
      name:pizza.name,
      image:pizza.image,
      price:pizza.price,
      type:pizza.type,
      qty:1
    };

    this.itemsSignal.update((current)=>[...current,newItem]);
  }
  }

  increaseQty(id:string){
    this.itemsSignal.update((itemsOfSignalArray)=> itemsOfSignalArray.map((item)=>item.cartId===id?{...item,qty:item.qty+1}:item));
  }
  decreaseQty(id:string){
    this.itemsSignal.update((itemsOfSignalArray)=> itemsOfSignalArray.map((item)=>item.cartId===id?{...item,qty:item.qty-1}:item).filter((item)=>item.qty >0));
  }
    // vvv impt logic and piece of code
  subTotal= computed(()=>{
    return this.itemsSignal().reduce((sum,currObjInArray)=> sum + currObjInArray.price* currObjInArray.qty , 0)
  })
  totalItemCount = computed(()=>
  this.itemsSignal().reduce((totalQty,EachObjInSignalArray)=>totalQty+EachObjInSignalArray.qty,0)
  );
  deleteItem(id:string){
    this.itemsSignal.update((itemsOfSignalArray)=>itemsOfSignalArray.filter((eachItem)=>eachItem.cartId !==id))
  } 
}
