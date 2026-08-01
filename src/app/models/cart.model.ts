export interface CartItem{
    cartId:string,
    // kind:'pizza'|'custom',
    name:string,
    image:string,
    price:number,
    qty:number,
    type:'veg'|'nonveg',
    // type?:'veg'|'nonveg',
    // toppings?:string[],
    
}