import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { UserData } from '../UserData';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css'
})
export class HomePageComponent {
	userData : UserData = null;

	constructor (private dataService: DataService)
	{
	}

	ngOnInit()
	{
		this.userData = this.dataService.getUserData();
	}
}
