import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Industry } from './Industry';
import { UserData } from './UserData';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private httpClient: HttpClient) { }

	url: string = 'http://localhost:8000';

	//----------------------------------------------------------------------------------------------
	// For handling employers.
	//
	getEmployers(): Observable<any>
	{
		return this.httpClient.get<any>(`${this.url}/employers`, { headers: { Accept: 'application/json' } });
	}

	//----------------------------------------------------------------------------------------------
	// For handling the industries.
	//
	addIndustry(industry: Industry): Observable<any> {
		return this.httpClient.put<any>(`${this.url}/industries`, { 'industry': industry}, { headers: { Accept: 'application/json' } });
	}

	getIndustries(): Observable<any>
	{
		return this.httpClient.get<any>(`${this.url}/industries`, { headers: { Accept: 'application/json' } });
	}

	removeIndustry(industryID: number): Observable<any> {
		return this.httpClient.delete<any>(`${this.url}/industries/${industryID}`, { headers: { Accept: 'application/json' } });
	}

	//----------------------------------------------------------------------------------------------
	// For handling users.
	//
	getUser(userID: number): Observable<UserData> {
		return this.httpClient.get<UserData>(`${this.url}/users/${userID}`, { headers: { Accept: 'application/json' } });
	}

	updateUser(userData: UserData): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/users/${userData.ID}`, { 'userData': userData}, { headers: { Accept: 'application/json' } });
	}

	addUser(userData: UserData): Observable<any> {
		return this.httpClient.put<any>(`${this.url}/users`, { 'userData': userData}, { headers: { Accept: 'application/json' } });
	}

	loginUser(email: string, password: string): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/login`, { 'email': email, 'password': password }, { headers: { Accept: 'application/json' } });
	}
}
