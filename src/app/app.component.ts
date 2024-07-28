import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true, // Déclare le composant comme autonome
  imports: [RouterOutlet, LoginComponent], // Importation des modules nécessaires pour le routage
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTitle = 'AngularListeContacts'; // Titre de l'application
}
