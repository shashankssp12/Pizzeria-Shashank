import { Component, computed, inject, signal } from '@angular/core';
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
  cartService = inject(CartService);

  //getting ingredient list
  ingredients_data: Ingredients[] = INGREDIENTS_DATA
  // name 

   itemsSelected = signal<number[]>([]);
          seeIds = this.itemsSelected.asReadonly();
          
          
  selectedId(id:number){
    let items = this.itemsSelected()
    if(items.find((item)=>item === id)){
      //remove
      this.itemsSelected.update(()=>items.filter((item)=>item !==id)) 
      console.log(this.itemsSelected())}
    else{
      // add
      this.itemsSelected.update((current)=>[...current,id]) ;
      console.log(this.itemsSelected())}
  }

  currentTotalCost = computed(()=>{
    const ids = this.seeIds();
    return this.ingredients_data.
    filter((data)=>ids.includes(data.id)).
    //what filter is giving back after functioning :
    // [ { id: 101, tname: "Pepperoni", price: 110 }, { id: 103, tname: "Corn", price: 38 } ]
    reduce((sum, data)=>sum+data.price,0);
  });

  addPizza(){
    if( this.currentTotalCost()>0){
    this.cartService.addCustomPizza({price: this.currentTotalCost()})
    this.itemsSelected.set([]);
    console.log(this.itemsSelected());
  }
  else{
    alert("Add at least one ingredient");
  }
}

}
