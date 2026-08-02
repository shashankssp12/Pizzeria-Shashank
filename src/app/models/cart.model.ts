export interface CartItem{
    cartId:string,
    // kind:'pizza'|'custom',
    pizzaId:string,
    name:string,
    image:string,
    price:number,
    qty:number,
    type:'veg'|'nonveg',
    // type?:'veg'|'nonveg',
    // toppings?:string[],
    
}