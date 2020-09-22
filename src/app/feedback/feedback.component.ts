import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
   model:any = {};
   mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let feedbackData = [];
    let getData = localStorage.getItem('feedback');
    if(getData){
      feedbackData = JSON.parse(getData);
    }
    feedbackData.push(this.model)
    localStorage.setItem('feedback',JSON.stringify(feedbackData));
    this.router.navigate(['/list'])
  }
}
