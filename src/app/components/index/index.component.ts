import { Component, NgModule, ViewEncapsulation  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import axios from 'axios';


@Component({
  selector: 'app-index',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(private router: Router) {}

  email: String = '';
  password: String = '';

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  async submit(): Promise<void> {
    interface login {
      email: String;
      password: String;
    }
    const data: login = {
      email: this.email,
      password: this.password,
    };
    try {
      const response = await axios.post('http://localhost:3000/login', data, {
        withCredentials: true, // Inclui cookies
          headers: {
              "Content-Type": "application/json", 
          },
      });
      if (response.status == 200) {
        console.log(response.data);
        this.router.navigate(['/home']);
               }
      return response.data; 
  } catch (error: any) {
      console.error("Erro ao fazer POST:", error.message);
      throw error.response?.data || error;
  }
  }


  
}
