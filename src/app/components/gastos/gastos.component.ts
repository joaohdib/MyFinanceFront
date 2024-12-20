import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { GastoInfoComponent } from './components/gasto-info/gasto-info.component';

@Component({
  selector: 'app-gastos',
  imports: [MatButtonModule, GastoInfoComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  constructor(private router: Router) {}

  irParaOutraRota(rota: string): void {
    this.router.navigate([rota]); 
  }
}
