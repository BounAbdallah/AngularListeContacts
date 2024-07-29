import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: ContactModel = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    etat: '',
    createdAt: '',
    createdBy: '',
    updatedAt: '',
    updatedBy: '',
    description: ''
  };

  constructor(private router: Router) {}

  saveContact() {
    const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.contact.id = this.generateNewId(contacts);
    this.contact.createdAt = new Date().toISOString();
    this.contact.updatedAt = new Date().toISOString();
    contacts.push(this.contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.router.navigateByUrl('/');
  }

  private generateNewId(contacts: ContactModel[]): number {
    const maxId = contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) : 0;
    return maxId + 1;
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}

interface ContactModel {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  etat: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  updatedBy: string;
  description: string;
}
