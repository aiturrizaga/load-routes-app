import { Routes } from '@angular/router';
import { CustomerHomePage } from './pages/customer-home-page/customer-home-page';
import { CustomerEditPage } from './pages/customer-edit-page/customer-edit-page';

export const routes: Routes = [
    {
        path: '',
        component: CustomerHomePage
    },
    {
        path: ':id/edit',
        component: CustomerEditPage
    },
    {
        path: ':id/details',
        loadComponent: () => import('./pages/customer-detail-page/customer-detail-page').then(c => c.CustomerDetailPage)
    }
]