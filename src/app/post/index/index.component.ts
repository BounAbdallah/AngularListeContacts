import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactModel } from '../../contact/contact.model';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  contacts: ContactModel[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  private loadContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }
  goBack() {
    this.router.navigateByUrl('/');
  }
}
