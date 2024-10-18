import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (typeof window !== 'undefined') {
    const logedInUserData = localStorage.getItem('loginUserData') || null;
    console.log(logedInUserData);
    if (logedInUserData === null) {
      router.navigateByUrl('login');
      return false;
    }
  } else {
    router.navigateByUrl('login');
    return false;
  }
  return true;
};
