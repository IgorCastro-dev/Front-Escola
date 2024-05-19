import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');
  const password = localStorage.getItem('password');

  if (user === 'TESTE' && password === '123') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
