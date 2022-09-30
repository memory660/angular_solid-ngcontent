import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpPostService } from './components/http-post.service';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'PostService',
      useExisting: HttpPostService
    }
  ],
  exports: [
    PostComponent
  ]
})
export class HttpSolid2Module { }
