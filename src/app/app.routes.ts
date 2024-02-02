import { Routes } from '@angular/router';
import { BxcodeHomeComponent } from './pages/bxcode-home/bxcode-home.component';
import { BxcodeAboutComponent } from './pages/bxcode-about/bxcode-about.component';

export const routes: Routes = [

    // { path: 'home', component: BxcodeHomeComponent },
    {
        path: '', loadComponent: () => import('./pages/bxcode-home/bxcode-home.component')
            .then(c => c.BxcodeHomeComponent)
    },

    {
        path: 'about', loadComponent: () => import('./pages/bxcode-about/bxcode-about.component')
            .then(c => c.BxcodeAboutComponent)
    },
    {
        path: '404', loadComponent: () => import('./pages/bxcode-404/bxcode-404.component')
            .then(nf => nf.Bxcode404Component)
    },
    { path: '**', redirectTo: '404' },
];
