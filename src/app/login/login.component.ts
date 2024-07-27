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

  constructor(private router: Router) {
    // Charger les utilisateurs depuis le localStorage lors de l'initialisation du composant
    this.loadUsers();
  }

  onRegister() {
    // Charger les utilisateurs depuis le localStorage
    const users = this.loadUsers();

    // Vérifier si l'utilisateur existe déjà
    const userExists = users.some(user => user.email === this.signUpObj.email);
    if (!userExists) {
      users.push(this.signUpObj);
      // Sauvegarder les utilisateurs dans le localStorage
      this.saveUsers(users);
      alert('Inscription réussie');
      this.signUpObj = { name: '', email: '', password: '' }; // Réinitialiser le formulaire
    } else {
      alert('Utilisateur déjà existant');
    }
  }

  onLogin() {
    // Charger les utilisateurs depuis le localStorage
    const users = this.loadUsers();

    // Trouver l'utilisateur correspondant
    const user = users.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (user) {
      alert('Utilisateur trouvé...');
      // Sauvegarder l'utilisateur connecté dans le localStorage
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Aucun utilisateur trouvé');
    }
  }

  private loadUsers(): SignUpModel[] {
    if (this.isLocalStorageAvailable()) {
      const localStorageUsers = localStorage.getItem('users');
      return localStorageUsers ? JSON.parse(localStorageUsers) : [];
    }
    return [];
  }

  private saveUsers(users: SignUpModel[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorageTest__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
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
