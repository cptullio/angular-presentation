import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './posts';


@Injectable()
export class FirstService {

  url = "https://jsonplaceholder.typicode.com/posts/";
  
  constructor(private http: HttpClient ) { }

  getPost(id): Observable<Post>{
    return this.http.get<Post>(this.url+id);
  } 
}
