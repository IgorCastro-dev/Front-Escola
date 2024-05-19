import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof window !== 'undefined') { 
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');

    
    if (!user || !password) {
      router.navigate(['/login']);
      return false;
    }

    if (user === 'TESTE' && password === '123') {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
