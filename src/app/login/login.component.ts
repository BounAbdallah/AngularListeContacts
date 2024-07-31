import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignDivVisible: boolean = true;
  signUpObj: SignUpModel = { name: '', email: '', password: '' };
  loginObj: LoginModel = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onRegister() {
    this.errorMessage = null; // Réinitialiser le message d'erreur
    const users = this.loadUsers();
    const userExists = users.some(user => user.email === this.signUpObj.email);
    if (!userExists) {
      users.push(this.signUpObj);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Inscription réussie');
      this.signUpObj = { name: '', email: '', password: '' };
    } else {
      this.errorMessage = 'Utilisateur déjà existant';
    }
  }

  onLogin() {
    this.errorMessage = null; // Réinitialiser le message d'erreur
    const users = this.loadUsers();
    const user = users.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (user) {
      sessionStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = 'Aucun utilisateur trouvé ou mot de passe incorrect';
    }
  }

  onLogout() {
    sessionStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  private loadUsers(): SignUpModel[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
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
