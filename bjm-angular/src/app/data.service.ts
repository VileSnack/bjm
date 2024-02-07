import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Industry } from './Industry';
import { UserData } from './UserData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	userData: UserData = null;
	industries: Array<Industry> = null;
	constructor() { }

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
		return new Array<Industry>();
	}
}
