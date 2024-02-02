import { Component } from '@angular/core';
import { UserData } from '../UserData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
	userData : UserData = {
		ID: -1,
		EmailAddress: '',
		FamilyName: '',
		FullName: '',
		GivenName: '',
		ImageFile: '',
		MiddleName: '',
		NamingStyleID: 1,
		Summary: '',
		UserName: '',
		UserTypeID: 1
	};

	onNamingStyleChanged(nameStyleID: number)
	{
		this.userData.NamingStyleID = nameStyleID;
	}
	
	addUser()
	{
		console.log('addUser() fired.');
	}
}
