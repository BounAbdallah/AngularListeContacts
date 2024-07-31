import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Importer ReactiveFormsModule ici
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    EditComponent,
    // Autres composants liés au module Post
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Ajouter ReactiveFormsModule ici
    // Autres modules nécessaires
  ],
  providers: [],
  exports: [
    EditComponent,
    // Autres composants à exporter si nécessaire
  ]
})
export class PostModule { }
