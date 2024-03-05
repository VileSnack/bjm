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

	addIsExpanded: boolean = false;

	history: Array<WorkHistoryEntry> = null;

	newWorkHistoryInput: WorkHistoryInput = {
		EmployeeID: -1,
		EmployerName: '',
		PositionTitle: '',
		StartDate: null,
		IsCurrent: true,
		EndDate: null
	};

	updateMsg: string = '';

	ngOnInit()
	{
		this.newWorkHistoryInput.EmployeeID = this.userID;
		this.refresh();
	}

	addWorkHistory()
	{
		this.apiService.addWorkHistory(this.newWorkHistoryInput).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => {
				this.updateMsg = '';
				this.refresh();
			} , 2000);
		});
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
