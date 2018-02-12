import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostsComponent} from './posts/posts.component';
import {PostDetailsComponent} from './post-details/post-details.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
