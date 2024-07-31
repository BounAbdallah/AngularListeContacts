import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContact(Number(id));
    }
  }

  private loadContact(id: number) {
    const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.contact = contacts.find(contact => contact.id === id) || this.contact;
  }

  saveContact() {
    const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
    const index = contacts.findIndex(contact => contact.id === this.contact.id);
    if (index !== -1) {
      contacts[index] = this.contact;
    } else {
      contacts.push(this.contact);
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.router.navigateByUrl('/home');
  }
  
  goBack() {
    this.router.navigateByUrl('/contacts');
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
