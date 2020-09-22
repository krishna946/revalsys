import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.model.username === "admin" && this.model.password === "Admin@123"){
      this.router.navigate(['list'],{ queryParams: { sortType: 'hightolow' } });
    } else{
      return alert("invalid Credentilas")
    }
  }
}
