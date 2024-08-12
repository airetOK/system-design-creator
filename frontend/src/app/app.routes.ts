import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: ':lang', component: MainComponent },
    { path: '', redirectTo: 'en', pathMatch: 'full' }
];
