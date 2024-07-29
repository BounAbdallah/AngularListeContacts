import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { LoginComponent } from "./login/login.component"; // Import LoginComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LoginComponent], // Importation des modules nécessaires pour le routage et le composant de login
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularListeContacts'; // Titre de l'application
}
