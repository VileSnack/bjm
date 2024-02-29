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

	newPosition: Position = {
		ID: -1,
		Title: '',
		EmployerID: -1
	};

	positions: Array<Position> = null;

	ngOnInit()
	{
		this.dataService.update();
	}

	//----------------------------------------------------------------------------------------------
	// Subscribes to an event in the data service which is triggered every time the data service
	// updates its data.
	//
	notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
		this.positions = this.dataService.getPositions();
	});

}
