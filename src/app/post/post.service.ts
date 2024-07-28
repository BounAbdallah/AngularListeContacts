import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private storageKey = 'posts';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Méthode pour obtenir tous les posts
  getAll(): Observable<Post[]> {
    if (isPlatformBrowser(this.platformId)) {
      const storedPosts = localStorage.getItem(this.storageKey);
      const posts = storedPosts ? JSON.parse(storedPosts) : [];
      return of(posts); // Retourner un observable
    }
    return of([]); // Retourner un tableau vide ou gérer autrement
  }

  // Méthode pour obtenir un seul post par ID
  find(id: number): Observable<Post | undefined> {
    return this.getAll().pipe(
      map(postsArray => postsArray.find(post => post.id === id))
    );
  }

  // Méthode pour supprimer un post par ID
  delete(id: number): void {
    if (isPlatformBrowser(this.platformId)) {
      let posts: Post[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
      posts = posts.filter((post: Post) => post.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(posts));
    }
  }
}
