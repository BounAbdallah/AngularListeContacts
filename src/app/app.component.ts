import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { IndexComponent } from "./post/index/index.component";
import { CreateComponent } from "./post/create/create.component";

@Component({
  selector: 'app-root',
  standalone: true, // Déclare le composant comme autonome
  imports: [RouterOutlet, LoginComponent, IndexComponent, CreateComponent], // Importation des modules nécessaires pour le routage
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularListeContacts'; // Titre de l'application
}
