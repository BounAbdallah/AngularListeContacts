// src/app/index/index.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ajouter CommonModule ici
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    // Charger les posts depuis le stockage local
    const storedPosts = localStorage.getItem('posts');
    this.posts = storedPosts ? JSON.parse(storedPosts) : [];
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(item => item.id !== id);
    // Mettre à jour le stockage local après la suppression
    localStorage.setItem('posts', JSON.stringify(this.posts));
    console.log('Post deleted successfully!');
  }
}
