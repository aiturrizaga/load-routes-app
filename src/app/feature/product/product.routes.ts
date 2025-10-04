import { Routes } from '@angular/router';
import { ProductHomePage } from './pages/product-home-page/product-home-page';
import { ProductDetailPage } from './pages/product-detail-page/product-detail-page';

export const routes: Routes = [
    {
        path: '',
        component: ProductHomePage
    },
    {
        path: ':id/details',
        component: ProductDetailPage
    }
]