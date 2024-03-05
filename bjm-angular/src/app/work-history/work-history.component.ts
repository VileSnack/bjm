import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { WorkHistoryEntry } from '../WorkHistoryEntry';
import { WorkHistoryInput } from '../WorkHistoryInput';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
	constructor (private apiService: ApiService) { }
	@Input() userID: number;

	history: Array<WorkHistoryEntry> = null;

	newWorkHistoryInput: WorkHistoryInput = {
		EmployeeID: -1,
		EmployerName: '',
		PositionTitle: '',
		StartDate: null,
		IsCurrent: true,
		EndDate: null
	};

	addIsExpanded: boolean = false;

	ngOnInit()
	{
		this.newWorkHistoryInput.EmployeeID = this.userID;
		this.refresh();
	}

	addWorkHistory()
	{
		console.log(this.newWorkHistoryInput);
	}

	refresh()
	{
		this.apiService.getWorkHistory(this.userID).subscribe((data:any) => {
			this.history = data.history;
		});
	}

	toggleAdd()
	{
		this.addIsExpanded = !this.addIsExpanded;
	}
}
