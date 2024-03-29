import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Employer } from '../Employer';

@Component({
  selector: 'app-employers-panel',
  templateUrl: './employers-panel.component.html',
  styleUrl: './employers-panel.component.css'
})
export class EmployersPanelComponent {
	constructor(private apiService: ApiService, private dataService: DataService) { }

	isExpanded: boolean = false;

	employers: Array<Employer> = null;

	newEmployer: Employer = {
		ID: -1,
		Name: '',
		IndustryID: -1,
		Spiel: '',
		PositionCount: 0
	};

	//----------------------------------------------------------------------------------------------
	// Subscribes to an event in the data service which is triggered every time the data service
	// updates its data.
	//
	notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
		this.employers = this.dataService.getEmployers();
	});

	updateMsg: string = '';

	ngOnInit()
	{
		this.dataService.update();
	}

	add()
	{
		this.apiService.addEmployer(this.newEmployer).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			this.newEmployer.Name = '';
			this.newEmployer.IndustryID = -1;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}

	disableAddButton() : boolean
	{
		return ('' === this.newEmployer.Name ||(-1 === this.newEmployer.IndustryID));
	}

	editEmployer()
	{
	}

	onIndustryChanged(industryID: number)
	{
		this.newEmployer.IndustryID = industryID;
	}

	remove(employerID)
	{
		this.apiService.removeEmployer(employerID).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			setTimeout(() => this.updateMsg = '', 5000);
		});
	}

	toggleAddDiv()
	{
		this.isExpanded = !this.isExpanded;
	}
}
