import { Component, OnInit } from '@angular/core';
import { UserCategory } from 'src/app/models/user-category';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userForm: FormGroup
  constructor(public authService: AuthService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService) { }
  ngOnInit(): void {
    if(this.isAuthenticated()){
      this.authService.userDetailFromToken()
      this.createForm()
      this.userForm.patchValue({
        id:this.authService.userId,
        firstName:this.authService.name,
        lastName:this.authService.surname,
        email:this.authService.email
  
      })
    }
  
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id:["",Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  userUpdate() {
    if (this.userForm.valid) {
      let formmodel = Object.assign(this.userForm.value)
      this.userService.userUpdate(formmodel).subscribe(response => {
        this.toastrService.info(response.message, "Bilgiler Güncellendi")
      }, responseError => {
        this.toastrService.error(responseError.error, "Kullanıcı Bulunamadı")
      })
    }
  }
  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      return false
    }
   }






}
