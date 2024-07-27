import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importation du module des formulaires
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // Déclare le composant comme autonome
  imports: [CommonModule, FormsModule], // Importation des modules nécessaires pour les formulaires
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignDivVisible: boolean = true;
  signUpObj: SignUpModel = { name: '', email: '', password: '' };
  loginObj: LoginModel = { email: '', password: '' };
  users: SignUpModel[] = [];

  constructor(private router: Router) {}

  onRegister() {
    const userExists = this.users.some(user => user.email === this.signUpObj.email);
    if (!userExists) {
      this.users.push(this.signUpObj);
      alert('Inscription réussie');
      this.signUpObj = { name: '', email: '', password: '' }; // Réinitialiser le formulaire
    } else {
      alert('Utilisateur déjà existant');
    }
  }

  onLogin() {
    const user = this.users.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (user) {
      alert('Utilisateur trouvé...');
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Aucun utilisateur trouvé');
    }
  }
}

interface SignUpModel {
  name: string;
  email: string;
  password: string;
}

interface LoginModel {
  email: string;
  password: string;
}
