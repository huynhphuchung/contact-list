import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ContactService, Contact } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  providers: [ContactService],
})
export class ContactListComponent implements OnInit, OnChanges {
  @Output() contactSelected = new EventEmitter<number>();
  @Input() searchTerm: string = '';

  constructor(private contactService: ContactService) {}

  contacts: Contact[] = [];

  ngOnInit() {
    this.loadContacts();
  }

  ngOnChanges() {
    this.loadContacts();
  }

  loadContacts() {
    if (this.searchTerm) {
      this.contactService
        .searchContacts(this.searchTerm)
        .subscribe((contacts) => {
          this.contacts = contacts;
        });
    } else {
      this.contactService.getContacts().subscribe((contacts) => {
        this.contacts = contacts;
      });
    }
  }
  selectContact(id: number) {
    this.contactSelected.emit(id);
  }
}
