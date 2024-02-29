import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Position } from '../Position';

@Component({
  selector: 'app-positions-panel',
  templateUrl: './positions-panel.component.html',
  styleUrl: './positions-panel.component.css'
})
export class PositionsPanelComponent {
	constructor(private apiService: ApiService, private dataService: DataService) { }

	isExpanded: boolean = false;

	newPosition: Position = {
		ID: -1,
		Title: '',
		EmployerID: -1
	};

	positions: Array<Position> = null;

	//----------------------------------------------------------------------------------------------
	// Subscribes to an event in the data service which is triggered every time the data service
	// updates its data.
	//
	notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
		this.positions = this.dataService.getPositions();
	});

	updateMsg: string = '';

	ngOnInit()
	{
		this.dataService.update();
	}

	add()
	{
		this.apiService.addPosition(this.newPosition).subscribe((data:any) => {
			this.dataService.update();
			this.updateMsg = data.msg;
			this.newPosition.Title = '';
			this.newPosition.EmployerID = -1;
			setTimeout(() => this.updateMsg = '', 2000);
		});
	}

	disableAddButton() : boolean
	{
		return ('' === this.newPosition.Title ||(-1 === this.newPosition.EmployerID));
	}

	onEmployerChanged(employerID: number)
	{
		this.newPosition.EmployerID = employerID;
	}

	toggleAddDiv()
	{
		this.isExpanded = !this.isExpanded;
	}
}
