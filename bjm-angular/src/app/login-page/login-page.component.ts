import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrl: './login-page.component.css'
})
export class LoginPageComponent
{
	constructor(
		private router: Router,
		private apiService: ApiService
	) { }

	showMsg: boolean = false;
	errorMsg: string = '';

	userID: number = -1;

	ngOnInit()
	{
		this.userID = -1;
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
				this.router.navigate([`/home/${data.userID}`], { skipLocationChange: true });
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
