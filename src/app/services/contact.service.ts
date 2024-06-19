import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
    { id: 2, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
    { id: 4, name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
    { id: 5, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 6, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
    { id: 7, name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
    { id: 8, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 9, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
    { id: 10, name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
    { id: 11, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 12, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
    { id: 13, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 14, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
    { id: 15, name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
    { id: 16, name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
    { id: 17, name: 'Charlie', email: 'charlie@example.com', phone: '555-8765' },
  ];

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === id);
    return of(contact);
  }

  searchContacts(name: string): Observable<Contact[]> {
    const filteredContacts = this.contacts.filter((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    return of(filteredContacts);
  }
}
