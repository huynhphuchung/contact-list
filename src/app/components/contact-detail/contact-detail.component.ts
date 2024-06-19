import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ContactService, Contact } from '../../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
  providers: [ContactService],
})
export class ContactDetailComponent {
  @Input() contactId: number | null = null;
  contact: Contact | undefined;

  constructor(private contactService: ContactService) {}

  ngOnChanges() {
    if (this.contactId !== null) {
      this.contactService
        .getContactById(this.contactId)
        .subscribe((contact) => {
          this.contact = contact;
        });
    }
  }
}
