import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { GastoInfoComponent } from './components/gasto-info/gasto-info.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import axios from 'axios';



@Component({
  selector: 'app-gastos',
  imports: [MatButtonModule, GastoInfoComponent, MatSelectModule, FormsModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  category: string = '';
  year: number = 0;
  month: number = 0;
  


  constructor(private router: Router, private renderer: Renderer2) {
    
  }

  filtrarGastos(): void {
    interface element {
      id: number;
      category: string;
      value: string;
    }
    console.log('Filtrando gastos...');
    console.log('Categoria: ' + this.category);
    console.log('Ano: ' + this.year);
    console.log('Mês: ' + this.month);

    axios.get('http://localhost:3000/findPayment', {
      params: {
        category: this.category,
        year: this.year,
        month: this.month,
        type: "categoryYearMonth"
      }
    }).then((response) => { 
      
      //console.log(response.data);
      response.data.forEach((element: Object) => {

        console.log(element);
        
      });

    }).catch((error) => {
      console.log(error);
    });
  }

  irParaOutraRota(rota: string): void {
    this.router.navigate([rota]);
  }
}
