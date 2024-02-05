import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { switchMap } from 'rxjs/operators';
import { UserData } from '../UserData';
//import { WorkHistoryComponent } from '../work-history/work-history.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
	userID: number = -1;

	userData: UserData = null;

	updateMsg: string = null;

	userTypes:Array<Object> = [
		{ id: 1, DisplayText: "Administrator" },
		{ id: 2, DisplayText: "Job Seeker" },
		{ id: 3, DisplayText: "HR Representative" }
	];

	constructor (private route: ActivatedRoute,
		private router: Router,
		private apiService: ApiService)
	{
	}

	update(event)
	{
		this.apiService.updateUser(this.userData).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}

	onNamingStyleChanged(nameStyleID: number)
	{
		this.userData.NamingStyleID = nameStyleID;
	}

	ngOnInit()
	{
		//------------------------------------------------------------------------------------------
		// Pull the user ID from the route.
		//
		this.route.paramMap.subscribe(params => {

			//--------------------------------------------------------------------------------------
			// The ID is passed in the routing.
			//
			this.userID = +params.get('userID');	// it's a string, convert

			//--------------------------------------------------------------------------------------
			// Use the user ID to fetch the user data from the API.
			//
			this.apiService.getUser(this.userID).subscribe((data:any) => {
				if (data.success)
				{
					this.userData = data.user;
				}
			});
		});
	}
}
