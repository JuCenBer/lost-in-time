import { Routes } from '@angular/router';
import { MainMenuButtonComponent } from './components/main-menu-button/main-menu-button.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

export const routes: Routes = [
    { path: 'start', pathMatch: 'full', component: MainMenuButtonComponent},
    { path: 'mainMenu', pathMatch: 'full', component: MainMenuComponent},
    {path: '**',  redirectTo: 'start'},
];
