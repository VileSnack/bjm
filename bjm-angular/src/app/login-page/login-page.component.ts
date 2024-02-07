import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { UserData } from '../UserData';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css'
})
export class LoginPageComponent
{
	constructor(
		private router: Router,
		private apiService: ApiService,
		private dataService: DataService
	) { }

	@Output() userChanged: EventEmitter<UserData> = new EventEmitter();

	showMsg: boolean = false;
	errorMsg: string = '';

	ngOnInit()
	{
		this.dataService.setUserData(null);
	}

	//----------------------------------------------------------------------------------------------
	// TODO: On init, see if there is a cookie with a session ID in it.
	//
	// If there is a session ID, hit the server to get the session.
	//
	// If the session is valid, navigate to the home page.
	//
	// Otherwise, solicit the user's login credentials.
	//

	onLoginClick(email, password) {
		this.apiService.loginUser(email, password).subscribe((data:any) => {
			if (data.success)
			{
				this.dataService.setUserData(data.userData);
				switch (data.userData.UserTypeID)
				{
					case 1: // Administrator
						this.router.navigate([`/admin`], { skipLocationChange: true });
					break;
					case 2: // Job seeker
						this.router.navigate([`/home`], { skipLocationChange: true });
					break;
					case 3: // Recruiter
						this.router.navigate([`/home`], { skipLocationChange: true });
					break;
				}
			}
			else
			{
				this.showMsg = true;
				this.errorMsg = data.msg;
			}
		});
	}

	onRecover() {
		this.router.navigate(['/recover'], { skipLocationChange: true });
	}

	onRegister() {
		this.router.navigate(['/register'], { skipLocationChange: true });
	}
}
