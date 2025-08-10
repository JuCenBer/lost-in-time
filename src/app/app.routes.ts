import { Routes } from '@angular/router';
import { MainMenuButtonComponent } from './components/main-menu-button/main-menu-button.component';

export const routes: Routes = [
    { path: 'start', pathMatch: 'full', component: MainMenuButtonComponent},
];
