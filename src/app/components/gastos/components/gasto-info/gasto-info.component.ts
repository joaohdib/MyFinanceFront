import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-gasto-info',
  imports: [MatButtonModule],
  templateUrl: './gasto-info.component.html',
  styleUrl: './gasto-info.component.css'
})
export class GastoInfoComponent {
  @Input() valor: Number = 0;
  @Input() data: String = '';
  @Input() categoria: String = '';
  @Input() tipo: String = '';
}
