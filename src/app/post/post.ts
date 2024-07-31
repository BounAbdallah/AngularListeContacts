// src/app/post/post.ts
export interface Post {
  id: number;
  title: string;
  body: string;
  name?: string;
  surname?: string;
  email?: string;
  contact?: string;
  etat?: string; // Assurez-vous que 'etat' est défini ici
}
