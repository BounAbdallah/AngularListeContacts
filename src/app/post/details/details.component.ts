import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  contact: ContactModel | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadContact(Number(id));
    }
  }

  private loadContact(id: number) {
    const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
    this.contact = contacts.find(contact => contact.id === id);
  }

  editContact() {
    this.router.navigate([`/edit/${this.contact?.id}`]);
  }

  moveToTrash() {
    if (this.contact) {
      const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
      this.contact.etat = 'trashed';
      const updatedContacts = contacts.map(contact => contact.id === this.contact!.id ? this.contact : contact);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      this.router.navigate(['/trash']);
    }
  }

  deleteContact() {
    if (this.contact) {
      let contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts = contacts.filter(contact => contact.id !== this.contact!.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.router.navigate(['/home']);
    }
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
