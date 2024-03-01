import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { UserData } from '../UserData';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
	constructor (private apiService: ApiService,
		private dataService: DataService)
	{
	}

	userData: UserData = null;

	updateMsg: string = null;

	userTypes:Array<Object> = [
		{ id: 1, DisplayText: "Administrator" },
		{ id: 2, DisplayText: "Job Seeker" },
		{ id: 3, DisplayText: "HR Representative" }
	];

	update(event)
	{
		this.apiService.updateUser(this.userData).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 2000);
		});
	}

	onNamingStyleChanged(nameStyleID: number)
	{
		this.userData.NamingStyleID = nameStyleID;
	}

	ngOnInit()
	{
		this.userData = this.dataService.getUserData();
	}
}
