import { Routes } from '@angular/router';
import { MainMenuButtonComponent } from './components/main-menu-button/main-menu-button.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LastHintComponent } from './components/last-hint/last-hint.component';

export const routes: Routes = [
    { path: 'start', pathMatch: 'full', component: MainMenuButtonComponent},
    { path: 'mainMenu', pathMatch: 'full', component: MainMenuComponent},
    { path: 'lastHint', pathMatch: 'full', component: LastHintComponent},
    { path: '**',  redirectTo: 'start' },
];
