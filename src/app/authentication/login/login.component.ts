import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner"
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeInfo } from 'src/app/shared/models/EmployeeInfo';
import { EmployeeService } from 'src/app/shared/services/employee-service';
import { AlertService } from 'src/app/shared/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  signinForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  UserName:string;
  password:string;
  Confirmpassword:string;
  result:any;
  disabled:boolean=false;
  rememberme:any;
  AdminDto:EmployeeInfo=new EmployeeInfo();
  fail: boolean;
  sucess: boolean;
  Model: any;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
     private IdentityServ:EmployeeService,
     private alertify:AlertService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {}
 
  onSubmit(){
    debugger;
   
    this.spinner.show();
    this.AdminDto.name=this.UserName;
    this.AdminDto.passWord=this.password;
  
  
   this.IdentityServ.authenticate(this.AdminDto).subscribe(
    next => { 
      
      debugger; console.log(next);
      this.Model=next;
      if(next){
    debugger;
    let jwt = next.token;
    let jwtData = jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
   
   
    let department = decodedJwtData.Department;
    if(department=="Administration"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/Management/Employees'])
    }
    else if(department=="CustomersService"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/Sales/CustomerSales'])
    }
    else if(department=="HR"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/HR/Employee'])
    } else if(department=="EM"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/EM/Customer'])
    } else if(department=="CEO"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/CEO/AddPayment'])
    }else if(department=="FM"){
      this.alertify.toastSuccess("تم الدخول بنجاح");
      localStorage.setItem("userToken",next.token);
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem("UserName",this.UserName);
      localStorage.setItem("department",department);
      this.router.navigate(['/FinanceManager/AddPayment'])
    }else{
        this.toastr.error('لاتملك صالحية', 'خطأ');  
      }

      
  

  }
  else{
    this.toastr.error('يوجد خطأ في الاسم او كلمة السر', 'خطأ');  
  
  }
    this.spinner.hide(); },
error => { this.fail = true;
  this.toastr.error('يوجد خطأ في الاسم او كلمة السر', 'خطأ');  
  this.spinner.hide(); },
() => { this.sucess = true;
  this.spinner.hide(); }

   )
  }


}
