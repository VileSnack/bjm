import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
	constructor(private router: Router) {}
	@Input() userID: number;

	navigate(url: string) {
		this.router.navigate([`${url}/${this.userID}`]);
	}

	logout() {
		this.router.navigate(['/login']);
	}
}
