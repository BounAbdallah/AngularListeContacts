import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'] // Assurez-vous que le chemin est correct
})
export class ViewComponent implements OnInit {
  id!: number;
  post: Post | undefined;
  postLoaded: boolean = false;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post | undefined) => {
      this.post = data;
      this.postLoaded = true;
    });
  }

  isPostDefined(): boolean {
    return this.post !== undefined && this.post.body !== undefined;
  }
}
