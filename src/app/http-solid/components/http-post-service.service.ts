import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostService } from './i-post-service';

@Injectable({
  providedIn: 'root'
})
export class HttpPostServiceService implements IPostService{

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  
}
