import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpPostServiceService } from './components/http-post-service.service';

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
      useExisting: HttpPostServiceService
    }
  ],
  exports: [
    PostComponent
  ]
})
export class HttpSolidModule { }
