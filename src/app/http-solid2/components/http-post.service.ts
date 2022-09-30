import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetPost } from './i-get-post';


@Injectable({
  providedIn: 'root'
})
export class HttpPostService implements IGetPost{

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  
}
