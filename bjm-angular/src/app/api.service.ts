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

	addIndustry(industry: Industry): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/addIndustry`, { 'industry': industry}, { headers: { Accept: 'application/json' } });
	}

	addUser(userData: UserData): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/addUser`, { 'userData': userData}, { headers: { Accept: 'application/json' } });
	}

	loginUser(email: string, password: string): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/login`, { 'email': email, 'password': password }, { headers: { Accept: 'application/json' } });
	}

	getIndustries(): Observable<any>
	{
		return this.httpClient.get<any>(`${this.url}/industries`, { headers: { Accept: 'application/json' } });
	}

	getUser(userID: number): Observable<UserData> {
		return this.httpClient.post<UserData>(`${this.url}/getUser`, { 'userID': userID }, { headers: { Accept: 'application/json' } });
	}

	updateUser(userData: UserData): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/updateUser`, { 'userData': userData}, { headers: { Accept: 'application/json' } });
	}
}
