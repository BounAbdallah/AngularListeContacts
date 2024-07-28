// src/app/post/post.model.ts
export interface Post {
    id: number;
    title: string;
    body: string;
    name?: string; // Ajoutez cette propriété si elle est optionnelle
    surname?: string; // Ajoutez cette propriété si elle est optionnelle
    email?: string; // Ajoutez cette propriété si elle est optionnelle
    contact?: string; // Ajoutez cette propriété si elle est optionnelle
  }
  