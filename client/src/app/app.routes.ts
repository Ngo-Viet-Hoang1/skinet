import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule) },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
