import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Industry } from '../Industry';

@Component({
  selector: 'app-industries-panel',
  templateUrl: './industries-panel.component.html',
  styleUrl: './industries-panel.component.css'
})
export class IndustriesPanelComponent
{
	constructor(private apiService: ApiService, private dataService: DataService) { }

	industries: Array<Industry> = null;

	newIndustry: Industry = {
		ID: -1,
		Name: ''
	};

	updateMsg: string = '';

	ngOnInit()
	{
		this.dataService.update();
	}

	//----------------------------------------------------------------------------------------------
	// Subscribes to an event in the data service which is triggered every time the data service
	// updates its data.
	//
	notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
		this.industries = this.dataService.getIndustries();
	});

	blockAdd() : boolean
	{
		return (0 == this.newIndustry.Name.length);
	}

	addIndustry()
	{
		this.apiService.addIndustry(this.newIndustry).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			this.newIndustry.Name = '';
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}

	removeIndustry(industryID)
	{
		this.apiService.removeIndustry(industryID).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}
}
