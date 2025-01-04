import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '@app/account/account.service';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.curentUser$.pipe(
      map(auth => {
        if (auth) return true;
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
      })
    );
  }
}
