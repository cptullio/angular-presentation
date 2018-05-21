import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { Post } from '../posts';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})



export class FirstComponentComponent implements OnInit {
  
  post:Post;
  
  bookNumber:number;
  

  constructor(private firstService :FirstService) { }

  ngOnInit() {
    this.bookNumber=41
  }
 
  search()
  {
    this.firstService.getPost(this.bookNumber).subscribe(p=> {
      this.post = p;
   });
  }
}
