import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
	@Input() userData: any;

	userTypes = [
		{ id: 1, DisplayText: "Administrator" },
		{ id: 2, DisplayText: "Job Seeker" },
		{ id: 3, DisplayText: "HR Representative" }
	];
	
	userType(): string {
		return this.userTypes.find(type => type.id == this.userData.UserTypeID).DisplayText;
	}
}
