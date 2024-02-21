import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employer } from '../Employer';
import { Industry } from '../Industry';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employers-panel',
  templateUrl: './employers-panel.component.html',
  styleUrl: './employers-panel.component.css'
})
export class EmployersPanelComponent {
	constructor(private apiService: ApiService, private dataService: DataService) { }

	isExpanded: boolean = false;

	employers: Array<Employer> = null;

	industries: Array<Industry> = null;

	newEmployer: Employer = {
		ID: -1,
		Name: '',
		IndustryID: -1,
		Spiel: ''
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
		this.employers = this.dataService.getEmployers();
		this.industries = this.dataService.getIndustries();
	});

	disableAddButton() : boolean
	{
		return ('' === this.newEmployer.Name ||(-1 === this.newEmployer.IndustryID));
	}

	toggleAddDiv()
	{
		this.isExpanded = !this.isExpanded;
	}

	addEmployer()
	{
		console.log(this.newEmployer);
		this.apiService.addEmployer(this.newEmployer).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			this.newEmployer.Name = '';
			this.newEmployer.IndustryID = -1;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}

	editEmployer()
	{
	}

	onIndustryChanged(industryID: number)
	{
		this.newEmployer.IndustryID = industryID;
	}

	removeEmployer(employerID)
	{
		this.apiService.removeEmployer(employerID).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}
}
