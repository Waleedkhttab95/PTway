import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    this.authService.autoAuthUser();
    const isAuth = this.authService.getIsAuth();
    const isCompany = this.authService.getIsCompany();
    console.log(isCompany);
// tslint:disable-next-line: triple-equals
    if (!isAuth || isCompany == 'true') {
      this.router.navigate(['/sign-in']);
    }

    return isAuth;
  }

}