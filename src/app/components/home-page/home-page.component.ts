import { Component } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AppHeaderComponent } from '../app-header/app-header.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ContactListComponent,
    ContactDetailComponent,
    MatSidenavModule,
    MatDividerModule,
    AppHeaderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  selectedContactId: number | null = null;
  searchTerm: string = '';

  onContactSelected(contactId: number) {
    this.selectedContactId = contactId;
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
