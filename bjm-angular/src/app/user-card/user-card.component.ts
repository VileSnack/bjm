import { Component, Input } from '@angular/core';
import { UserData } from '../UserData';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
	@Input() userData: UserData;

	userTypes = [
		{ id: 1, DisplayText: "Administrator" },
		{ id: 2, DisplayText: "Job Seeker" },
		{ id: 3, DisplayText: "HR Representative" }
	];

	userType(): string {
		return this.userTypes.find(type => type.id == this.userData.UserTypeID)?.DisplayText;
	}

	userName() : string
	{
		if (this.userData.NamingStyleID == 2)
		{
			return `${this.userData.FamilyName} ${this.userData.GivenName}`;
		}

		return `${this.userData.GivenName} ${this.userData.FamilyName}`;
	}

	ngOnInit()
	{
		console.log(this.userData);
	}
}
