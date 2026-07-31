import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderPizzaPageComponent } from './pages/order-pizza-page/order-pizza-page.component';
import { BuildPizzaPageComponent } from './pages/build-pizza-page/build-pizza-page.component';
import { ShoppingCartPageComponent } from './pages/shopping-cart-page/shopping-cart-page.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home-page",
        pathMatch:'full'
    },
    {
        path:"home-page",
        component: HomePageComponent
    },
     {
        path:"order-pizza",
        component: OrderPizzaPageComponent
    },
     {
        path:"build-pizza",
        component: BuildPizzaPageComponent
    },
    {
        path:"shopping-cart",
        component: ShoppingCartPageComponent
    }


];
