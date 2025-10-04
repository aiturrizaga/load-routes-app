import { Routes } from '@angular/router';
import { CustomerHomePage } from './pages/customer-home-page/customer-home-page';
import { CustomerEditPage } from './pages/customer-edit-page/customer-edit-page';
import { customerDataResolver } from './resolvers/customer-data-resolver';

export const routes: Routes = [
    {
        path: '',
        component: CustomerHomePage
    },
    {
        path: ':customerId/edit',
        component: CustomerEditPage
    },
    {
        path: ':customerId/details',
        resolve: {
            customer: customerDataResolver
        },
        loadComponent: () => import('./pages/customer-detail-page/customer-detail-page').then(c => c.CustomerDetailPage)
    }
]