import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  

  constructor(
    private service:ProductsService,
    private router: Router,
    private spinner: NgxSpinnerService
    
    ) { }
  allProductsList; 
  originalPosts;
  ngOnInit(): void {
    
    this.router.navigate(['list'],{ queryParams: { sortType: 'hightolow' } })
    this.service.getProducts().subscribe((products:any)=>{
      this.originalPosts = products.sort((low, high) => high.Price - low.Price);
       this.allProductsList = products.slice(0,12);
    })
  }
  sort(event:any) {
    switch (event.target.value) {
      case "Low":
        {
          this.allProductsList = this.allProductsList.sort((low, high) => 
            low.Price - high.Price,  
            this.router.navigate(['list'],{ queryParams: { sortType: 'lowtohigh' } })      
          );
          break;
        }

      case "High":
        {
          this.allProductsList = this.allProductsList.sort((low, high) => 
            high.Price - low.Price,    
            this.router.navigate(['list'],{ queryParams: { sortType: 'hightolow' } })
          );
          break;
        }
      }
  }
  @HostListener('window:scroll', [])
onScroll(): void {
  const triggerAt: number = 128; 
  /* perform an event when the user has scrolled over the point of 128px from the bottom */
  if (document.body.scrollHeight - (window.innerHeight + window.scrollY) <= triggerAt) {
    if(this.allProductsList.length < this.originalPosts.length){  
      let len = this.allProductsList.length;
 
      for(let i = len; i <= len+11; i++){
        this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
        this.allProductsList.push(this.originalPosts[i]);
      }
    }
  }
}
}
