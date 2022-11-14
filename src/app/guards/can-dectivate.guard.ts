import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CanDectivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.isDirty) {
        return window.confirm('are you sure you want to discard this changes!');
      }
      else{
    return true;
      }
  }
  
}
