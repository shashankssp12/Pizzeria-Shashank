import { computed, inject, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Ingredients } from '../models/ingredients';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);
  items = this.itemsSignal.asReadonly();
// for cutsom pizza, page unchecking all the items after add button --> we need to empty the signal itemsSelected from build-pizza-page


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
  addCustomPizza(pizza:{price:number}): void{
    const newItem:CartItem={
      cartId:crypto.randomUUID(),
      name:"Custom Pizza",
      price:pizza.price,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcINVDDim8x-fLq6BryiR_GP8oLQrHQnoQIDAyANExw&s=10",
      qty:1,

    }
    this.itemsSignal.update((current)=>[...current, newItem]);
    alert("Custom Pizza Added to Cart");
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

  clearCartData(){
    this.itemsSignal.set([]);
  }
}
