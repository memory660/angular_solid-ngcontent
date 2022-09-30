import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetPost } from '../i-get-post';


@Component({
  selector: 'app-post2',
  template: `
    {{ post$ |async|json}}
  `,
  styles: [
  ]
})
export class PostComponent implements OnInit {
  post$?: Observable<any>;

  constructor(@Inject('PostService') private post: IGetPost) {
    this.post$ = post.getPost();
   }

  ngOnInit(): void {

  }

}
