import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GastosComponent } from './components/gastos/gastos.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gastos', component: GastosComponent },
];
