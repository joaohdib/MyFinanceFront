import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IndexComponent } from './components/index/index.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'home', component: HomeComponent },
    { path: 'gastos', component: GastosComponent },
];
