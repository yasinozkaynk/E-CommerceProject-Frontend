import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  dataLoaded=false;

  constructor(private FormBuilder: FormBuilder,
     private authService: AuthService, 
    private activatedRoute:ActivatedRoute,
    private router:Router, 
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.FormBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel =Object.assign(this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message,"Giriş Yapıldı")
        localStorage.setItem("token",response.data.token)
        this.router.navigate(['products']);
      },responseError=>{
        this.toastrService.error(responseError.error,"Kullanıcı Bulunamadı")  
      })
    }
  }
  refresh(): void {
    window.location.reload();
}

}
