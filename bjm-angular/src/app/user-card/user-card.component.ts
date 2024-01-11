import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
	@Input() userID: number;

	public userData: any;

	constructor(private apiService: ApiService) { }

	ngOnInit()
	{
		//--------------------------------------------------------------------------------------
		// Use the user ID to fetch the user data from the API.
		//
		this.apiService.getUser(this.userID).subscribe((data:any) => {
			if (data.success)
			{
				this.userData = data.user;
				console.log(this.userData);
			}
		});
	}
}
