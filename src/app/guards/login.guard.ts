import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import axios from 'axios';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  return axios
    .get('http://localhost:3000/verifyAuth', {
      withCredentials: true, // Inclui cookies
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.data.verification === true) {
        return true; 
      } else {
        router.navigate(['']); 
        return false;
      }
    })
    .catch((error) => {
      console.error("Erro ao verificar autenticação:", error.message);
      router.navigate(['']); 
      return false;
    });
};
