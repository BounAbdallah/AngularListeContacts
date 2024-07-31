import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      etat: [''],
      description: ['']
    });
  }

  saveContact() {
    if (this.contactForm.valid) {
      const contacts: ContactModel[] = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact: ContactModel = {
        ...this.contactForm.value,
        id: this.generateNewId(contacts),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: '',
        updatedBy: ''
      };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.router.navigateByUrl('/');
    } else {
      this.contactForm.markAllAsTouched();
    }
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
