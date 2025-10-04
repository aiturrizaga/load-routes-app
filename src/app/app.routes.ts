import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'customers',
                loadChildren: () => import('./feature/customer/customer.routes').then(m => m.routes)
            },
            {
                path: 'products',
                loadChildren: () => import('./feature/product/product.routes').then(m => m.routes)
            }
        ]
    }
];
