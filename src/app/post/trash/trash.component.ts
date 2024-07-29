import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashedContacts: ContactModel[] = [];
  contacts: ContactModel[] = [];
  loggedUserEmail: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadLoggedUser();
    this.loadTrashedContacts();
  }

  private loadLoggedUser() {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser') || '{}');
    this.loggedUserEmail = loggedUser.email;
  }

  private loadTrashedContacts() {
    if (!this.loggedUserEmail) {
      this.router.navigateByUrl('');
      return;
    }
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.trashedContacts = this.contacts.filter(contact => contact.etat === 'trashed');
  }

  restoreContact(id: number) {
    if (!this.loggedUserEmail) {
      this.router.navigateByUrl('');
      return;
    }
    const contactToRestore = this.trashedContacts.find(contact => contact.id === id);
    if (contactToRestore) {
      contactToRestore.etat = 'active';
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      this.loadTrashedContacts(); // Refresh the list
    }
  }

  permanentlyDeleteContact(id: number) {
    if (!this.loggedUserEmail) {
      this.router.navigateByUrl('');
      return;
    }
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    this.loadTrashedContacts(); // Refresh the list
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
