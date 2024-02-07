import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserData } from '../UserData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
	constructor (private apiService: ApiService
		, private router: Router)
	{ }

	updateMsg: string = null;

	userData : UserData = {
		ID: -1,
		EmailAddress: '',
		FamilyName: '',
		GivenName: '',
		ImageFileName: '',
		MiddleName: '',
		NamingStyleID: 1,
		Summary: '',
		UserTypeID: 2
	};

	onNamingStyleChanged(nameStyleID: number)
	{
		this.userData.NamingStyleID = nameStyleID;
	}

	onUserTypeChanged(userTypeID: number)
	{
		this.userData.UserTypeID = userTypeID;
	}

	addUser()
	{
		if ('' === this.userData.Summary)
		{
			this.userData.Summary = `New user, joined ${new Date()}`;
		}

		this.apiService.addUser(this.userData).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}
	
	cancel()
	{
		this.router.navigate(['/login'], { skipLocationChange: true });
	}

	disabled() : boolean
	{
		return (this.userData.EmailAddress === '');
	}
}
