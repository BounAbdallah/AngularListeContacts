import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  post!: any; // Define the type according to your needs
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['postId'];

    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    this.post = existingPosts.find((p: any) => p.id === this.id);

    this.form = new FormGroup({
      name: new FormControl(this.post?.name || '', [Validators.required]),
      surname: new FormControl(this.post?.surname || '', [Validators.required]),
      email: new FormControl(this.post?.email || '', [Validators.required, Validators.email]),
      contact: new FormControl(this.post?.contact || '', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      const updatedPost = this.form.value;
      const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      const index = existingPosts.findIndex((p: any) => p.id === this.id);

      if (index !== -1) {
        existingPosts[index] = { ...existingPosts[index], ...updatedPost };
        localStorage.setItem('posts', JSON.stringify(existingPosts));
        console.log('Post updated successfully!');
        this.router.navigateByUrl('/post/index');
      }
    }
  }
}
