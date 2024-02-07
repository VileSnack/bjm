import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Industry } from '../Industry';

@Component({
  selector: 'app-industries-panel',
  templateUrl: './industries-panel.component.html',
  styleUrl: './industries-panel.component.css'
})
export class IndustriesPanelComponent
{
	constructor(private dataService: DataService) { }

	industries: Array<Industry> = [];

	ngOnInit()
	{
		this.industries = this.dataService.getIndustries();
	}
}
