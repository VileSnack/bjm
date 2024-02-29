import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Employer } from './Employer';
import { Industry } from './Industry';
import { Position } from './Position';
import { UserData } from './UserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	userData: UserData = null;
	employers: Array<Employer> = null;
	industries: Array<Industry> = null;
	positions: Array<Position> = null;
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

	public getEmployers() : Array<Employer>
	{
		return this.employers;
	}

	public getIndustries() : Array<Industry>
	{
		return this.industries;
	}

	public getPositions() : Array<Position>
	{
		return this.positions;
	}

	public update()
	{
		this.apiService.getIndustries().subscribe((data:any) => {
			this.industries = data.industries;

			this.apiService.getEmployers().subscribe((data:any) => {
				this.employers = data.employers;

				this.apiService.getPositions().subscribe((data:any) => {
					this.positions = data.positions;
					this.subjectNotifier.next(null);
				});
			});
		});
	}
}
