import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
   model:any = {};
   mobNumberPattern = "[6-9]{1}[0-9]{9}"; 
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  constructor(
    private router:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    let feedbackData = [];
    let getData = localStorage.getItem('feedback');
    if(getData){
      feedbackData = JSON.parse(getData);
    }
    feedbackData.push(this.model)
    localStorage.setItem('feedback',JSON.stringify(feedbackData));
    this.toastr.success("Feedback Submitted Successfully")
    f.resetForm();
  }
  isInputNUmber(eve){
    let ch = String.fromCharCode(eve.which);
    if(!(/[0-9]/.test(ch))){
      eve.preventDefault();
    }
  }
  ValidateAlpha(evt)
    {
        var keyCode = (evt.which) ? evt.which : evt.keyCode
        if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
         
        return false;
            return true;
    }
}
