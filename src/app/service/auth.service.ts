import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloged = new BehaviorSubject(false)
  loged = this.isloged.asObservable()

  constructor() { }
  changeLogStatus(val:boolean){
    this.isloged.next(val);
  }
}
