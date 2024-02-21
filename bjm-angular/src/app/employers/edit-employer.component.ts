import { Component, Input } from '@angular/core';
import { Employer } from '../Employer';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrl: './edit-employer.component.css'
})
export class EditEmployerComponent {
	@Input() employer: Employer;

	expanded: boolean = false;

	edit()
	{
		this.expanded = !this.expanded;
	}

	remove() {}
}
