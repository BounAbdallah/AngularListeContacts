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

  constructor(private router: Router) {}

  onRegister() {
    const users = this.loadUsers();
    const userExists = users.some(user => user.email === this.signUpObj.email);
    if (!userExists) {
      users.push(this.signUpObj);
      this.saveUsers(users);
      alert('Inscription réussie');
      this.signUpObj = { name: '', email: '', password: '' };
    } else {
      alert('Utilisateur déjà existant');
    }
  }

  onLogin() {
    const users = this.loadUsers();
    const user = users.find(user => user.email === this.loginObj.email && user.password === this.loginObj.password);
    if (user) {
      alert('Utilisateur trouvé...');
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigateByUrl('/');
    } else {
      alert('Aucun utilisateur trouvé');
    }
  }

  onLogout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }

  private loadUsers(): SignUpModel[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  private saveUsers(users: SignUpModel[]): void {
    localStorage.setItem('users', JSON.stringify(users));
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
