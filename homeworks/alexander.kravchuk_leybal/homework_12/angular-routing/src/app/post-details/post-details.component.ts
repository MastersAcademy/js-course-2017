import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: object;

  constructor(
    private postService: PostService,
    private currentRout: ActivatedRoute,
    ) { }

  ngOnInit() {
    const id: string = this.currentRout.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
    });
  }

}
