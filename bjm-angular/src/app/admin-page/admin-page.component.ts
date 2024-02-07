import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
	constructor (private dataService: DataService)
	{
	}
}
