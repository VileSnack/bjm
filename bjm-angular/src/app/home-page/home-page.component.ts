import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { UserData } from '../UserData';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent {
	userID: number = -1;

	userData : UserData = null;

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
			// The route contains the user ID as a string, so it has to be converted to a number.
			//
			this.userID = +params.get('userID');

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
