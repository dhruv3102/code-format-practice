import { Component } from '@angular/core';

import { Contact } from '../models/contact';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
	contactList: Contact[] = [];

	getContactDetails(): Contact {
		// return contact
		return this.contactList['mobile'];
	}
}
