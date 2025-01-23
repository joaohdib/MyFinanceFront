import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private cookieService: CookieService) { }


  async logout(): Promise<void> {
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + 1);

    this.cookieService.set('token', '', expirationDate);
    this.router.navigate(['']);
  }


irParaOutraRota(rota: string): void {
  this.router.navigate([rota]);
}


}
