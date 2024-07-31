<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactModel } from '../../contact/contact.model';
=======
// src/app/index/index.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
>>>>>>> 0af10822cc835c1c1481147c6464112f38472fb1

@Component({
  selector: 'app-index',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink, CommonModule],
=======
  imports: [CommonModule, RouterModule], // Ajouter CommonModule ici
>>>>>>> 0af10822cc835c1c1481147c6464112f38472fb1
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
<<<<<<< HEAD
  contacts: ContactModel[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  private loadContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }
  goBack() {
    this.router.navigateByUrl('/');
=======
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
>>>>>>> 0af10822cc835c1c1481147c6464112f38472fb1
  }
}
