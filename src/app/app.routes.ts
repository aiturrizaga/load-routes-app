import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/main-layout/main-layout';
import { LoginPage } from './feature/auth/pages/login-page/login-page';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
    {
        path: 'auth/login',
        component: LoginPage
    },
    {
        path: 'console',
        component: MainLayout,
        canActivate: [authGuard],
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
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    }
];
