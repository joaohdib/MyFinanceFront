import {
  Component,
  Renderer2,
  ElementRef,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injector,
  ApplicationRef,
  ComponentRef
} from '@angular/core';
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
  private dynamicComponents: ComponentRef<any>[] = []; // Lista para armazenar as referências dos componentes criados
  category: string = '';
  year: number = 0;
  month: number = 0;



  constructor(private router: Router, private renderer: Renderer2,
    private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef) { }
    private components: any[] = [];

  filtrarGastos(): void {
    interface payment {
      _id: string;
      quantity: number;
      category: string;
      month: number;
      year: number;
      type: string;
    }
    this.cleanComponents();
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

      console.log(response.data);
      response.data.forEach((element: payment) => {

        const dynamicElement = this.renderer.createElement('div'); 
        this.renderer.appendChild(document.body, dynamicElement); // Adiciona ao body ou qualquer outro local

        // Usa ComponentFactoryResolver para criar o componente
        const factory = this.resolver.resolveComponentFactory(GastoInfoComponent);
        const componentRef = factory.create(this.injector);
        
        componentRef.instance.valor = element.quantity;
        componentRef.instance.data = `${element.month}/${element.year}`;
        componentRef.instance.categoria = element.category;
        componentRef.instance.tipo = element.type;

        // Anexa o componente ao ApplicationRef
        this.appRef.attachView(componentRef.hostView);

        // Insere o elemento DOM do componente no local criado
        const componentElement = (componentRef.hostView as any).rootNodes[0];
        this.renderer.appendChild(dynamicElement, componentElement);
        this.dynamicComponents.push(componentRef)

      });

    }).catch((error) => {
      console.log(error);
    });
  }


  cleanComponents():void {
    this.dynamicComponents.forEach((component) => {
      this.appRef.detachView(component.hostView);
      component.destroy();
    });
    this.dynamicComponents = [];
  }

  irParaOutraRota(rota: string): void {
    this.router.navigate([rota]);
  }
}
