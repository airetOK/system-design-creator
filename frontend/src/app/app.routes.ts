import { Routes } from '@angular/router';
import { ClarifyRequirementsComponent } from './clarify-requirements/clarify-requirements.component';

export const routes: Routes = [
    { path: ':lang', component: ClarifyRequirementsComponent }
];
