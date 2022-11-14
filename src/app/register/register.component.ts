import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isDirty = true;
  
  constructor(private router:Router) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.maxLength(16),Validators.minLength(6)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    username: new FormControl("",[Validators.required, Validators.minLength(8)]),
    password: new FormControl("", [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/)]),
      conPassword:new FormControl(null, [Validators.required,
        Validators.pattern(/^[a-zA-Z0-9*@%$#]*$/)]),
  })
  handelRegister(formInfo:FormGroup) {
    this.router.navigate(["/",])

  }

  

  ngOnInit(): void {
    
  }
  // controls عبارة عن اختصار علشان اوصل بسرعة 
 
}
