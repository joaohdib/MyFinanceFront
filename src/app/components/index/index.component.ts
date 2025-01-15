import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  email: String = '';
  password: String = '';

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
          headers: {
              "Content-Type": "application/json", // Define o tipo de conteúdo
          },
      });

      return response.data; // Retorna os dados da resposta
  } catch (error: any) {
      console.error("Erro ao fazer POST:", error.message);
      throw error.response?.data || error;
  }
  }
}
