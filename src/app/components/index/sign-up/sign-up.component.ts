import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  imports: [[MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule]],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
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
      const response = await axios.post('http://localhost:3000/signup', data, {
          headers: {
              "Content-Type": "application/json", 
          },
      });

      return response.data; 
  } catch (error: any) {
      console.error("Erro ao fazer POST:", error.message);
      throw error.response?.data || error;
  }
  }

}
