import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

  if (this.authService.isAuthenticated()) {
    console.log('User logged In');
    if(this.authService.isAdmin()){
      console.log("Yes its Admin passing the guard");
    }else {
      console.log("Its a student passing the guard");
    }
    return true;
  }
  console.log('User is not logged in !!!');
  this.router.navigate(['login']);
  return false;
}

}
