import { Component, Input } from '@angular/core';
import { Employer } from '../Employer';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrl: './edit-employer.component.css'
})
export class EditEmployerComponent {
	@Input() employer: Employer;

	isExpanded: string = 'none';

	edit()
	{
		this.isExpanded = 'table-row';
	}

	onIndustryChanged(industryID: number)
	{
		this.employer.IndustryID = industryID;
	}

	remove() {}

	update()
	{
		this.isExpanded = 'none';
	}
}
