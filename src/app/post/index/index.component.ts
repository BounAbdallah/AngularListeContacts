import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { ContactModel } from '../../contact/contact.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];
  contacts: ContactModel[] = [];

  constructor(public postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
    this.loadContacts();
  }

  private loadPosts() {
    const storedPosts = localStorage.getItem('posts');
    this.posts = storedPosts ? JSON.parse(storedPosts) : [];
  }

  private loadContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(item => item.id !== id);
    // Mettre à jour le stockage local après la suppression
    localStorage.setItem('posts', JSON.stringify(this.posts));
    console.log('Post deleted successfully!');
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}