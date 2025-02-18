import { Component, NgModule, ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-gasto',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './add-gasto.component.html',
  styleUrl: './add-gasto.component.css'
})
export class AddGastoComponent {
  email:any;
  password: any;

}
