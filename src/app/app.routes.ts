import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IndexComponent } from './components/index/index.component';
import { SignUpComponent } from './components/index/sign-up/sign-up.component';
import { AuthGuard } from './guards/login.guard';
import { AuthGuard2 } from './guards/index.guard';


export const routes: Routes = [
    { path: '', component: IndexComponent, canActivate: [AuthGuard2]},
    { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
    { path: 'gastos', component: GastosComponent },
    { path: 'signup', component: SignUpComponent },
];
