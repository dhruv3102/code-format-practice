import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'sample-project';
	isResolved = true;
	id: number;
	contactList = ['9878817969', '9008788111', '7415209630'];

	validate(isResolved: boolean): void {
		//return final value after concat with previous value
		const _x = 1;
		const _status = isResolved + 'Updated';
	}

	addInformation(): string {
		// returning string valu
		return 'Information';
	}
}
