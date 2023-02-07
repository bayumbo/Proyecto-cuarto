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
  datos: FormGroup
  constructor(
    private httpclien:HttpClient,
    private authService: AuthService,
    private router : Router
    ){
      this.datos= new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required]),
      })
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
  enviocorreo(){
    let params = {
      email:this.datos.value.email,
      password: this.datos.value.password
    }
    console.log(params)
   this.httpclien.post('http://localhost:3000/envio',params).subscribe(resp=>{ console.log(resp)})
  }
  
}
