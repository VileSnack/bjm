import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private httpClient: HttpClient) { }

	url: string = 'http://localhost:8000';

	loginUser(email: string, password: string): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/login`, { 'email': email, 'password': password }, { headers: { Accept: 'application/json' } });
	}

	getUser(userID: number): Observable<any> {
		return this.httpClient.post<any>(`${this.url}/getUser`, { 'userID': userID }, { headers: { Accept: 'application/json' } });
	}
}
