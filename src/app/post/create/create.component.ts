import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(public postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl('')
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const postData = this.form.value;
    console.log(postData);

    // Save data to localStorage
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to index page
    this.router.navigateByUrl('post/index');
  }
}
