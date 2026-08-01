/*
  {
    id: '0001',
    type: 'veg',
    price: 290,
    name: 'Paneer Tikka',
    image:
      'https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg',
    description:
      'This is popular italian pizza flavoured with marinated tikka sauce and paneer',
    ingredients: ['dough/flour', 'pizza sauce', 'pizza sauce seasoning', 'cheese'],
    topping: ['Paneer', 'Fried Onion', 'Green olive', 'Capsicum', 'Red peprika'],
  },
  
*/

export interface Pizza{
    id:string;
    type:'veg'|'nonveg';
    price:number;
    name:string;
    image:string;
    description:string;
    ingredients:string[];
    topping:string[];
}
