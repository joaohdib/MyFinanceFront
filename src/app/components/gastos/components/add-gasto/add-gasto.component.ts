import { Component, NgModule, ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import axios from 'axios';


@Component({
  selector: 'app-add-gasto',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule,MatSelectModule],
  templateUrl: './add-gasto.component.html',
  styleUrl: './add-gasto.component.css'
})
export class AddGastoComponent {
  date:any;
  value: any;
  category: any;


  submit() {
    axios.post('http://localhost:3000/payment', {
      quantity: this.value,
      category: this.category,
      month: new Date(this.date).getMonth() + 1,
      year: new Date(this.date).getFullYear(),
      type: 'expense'
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error('Error:', error);
    });
  }

}
