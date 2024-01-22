import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
	userID: number = -1;

	userData = null;

	constructor (private route: ActivatedRoute,
		private router: Router,
		private apiService: ApiService)
	{
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
					console.log(this.userData);
				}
			});
		});
	}
}
