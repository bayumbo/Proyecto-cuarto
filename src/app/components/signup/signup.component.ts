import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password:''
    
  }

  constructor(
  
    private authService: AuthService,
    private router : Router
    ){
      
      
    }

  ngOnInit(){
    
  }
  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/tasks-private']);
      },
      err => alert(err.error)
    )
  }
  
  
}
