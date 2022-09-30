import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostService } from '../i-post-service';

@Component({
  selector: 'app-post',
  template: `
    <p>
      post works!
    </p>
    {{ post$ |async|json}}
  `,
  styles: [
  ]
})
export class PostComponent implements OnInit {
  post$?: Observable<any>;

  constructor(@Inject('PostService') private post: IPostService) {
    this.post$ = post.getPost();
   }

  ngOnInit(): void {

  }

}
