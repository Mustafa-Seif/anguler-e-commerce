import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router , private isLoged:AuthService) { }

  ngOnInit(): void {
  }

  handleSubmitLogin(login:any){
    // on loged go to list products route 
    this.router.navigate(["/cart",]);
    // on loged change Log Status to true
    this.isLoged.changeLogStatus(true);
  }

}
