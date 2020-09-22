import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service:ProductsService,private router: Router) { }
  allProductsList; 
  ngOnInit(): void {
    
    this.router.navigate(['list'],{ queryParams: { sortType: 'hightolow' } })
    this.service.getProducts().subscribe((products:any)=>{
      this.allProductsList = products;
       this.allProductsList.sort((low, high) => high.Price - low.Price);
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


  onScroll() {
    console.log('scrolled!!');
  }
}
