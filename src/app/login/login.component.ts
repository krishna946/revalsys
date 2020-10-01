import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {}
  constructor(
    private router:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.model.username === "admin" && this.model.password === "Admin@123"){
      this.toastr.success('Login Successfully');
      this.router.navigate(['list'],{ queryParams: { sortType: 'hightolow' } });

    } else{
      return this.toastr.error('Invalid Credentials')
    }
  }
}
