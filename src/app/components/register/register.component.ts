import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private toastService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.registerAddForm()
  }

  registerAddForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  registerAdd() {
    if (this.formGroup.valid) {
      let registerModel = Object.assign({}, this.formGroup.value)
      this.authService.register(registerModel).subscribe(response => {
        this.toastService.info(response.message, "Kayıt Başarılı")
        this.router.navigate(['login'])
      }, responseError => {
        this.toastService.error(responseError.error);
      })
    }
  }

}
