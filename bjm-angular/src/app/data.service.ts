import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Industry } from './Industry';
import { UserData } from './UserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	userData: UserData = null;
	industries: Array<Industry> = null;
	constructor(private apiService: ApiService) { }

	//----------------------------------------------------------------------------------------------
	// This is used for notifying all subscribing components of updates to the data provided by this
	// service.
	//
	subjectNotifier: Subject<null> = new Subject<null>();

	public setUserData(newData: UserData)
	{
		this.userData = newData;
	}

	public getUserData() : UserData
	{
		return this.userData;
	}

	public getIndustries() : Array<Industry>
	{
		return this.industries;
	}

	public update()
	{
		this.apiService.getIndustries().subscribe((data:any) => {
			this.industries = data.industries;
			this.subjectNotifier.next(null);
		});
	}
}
