import { Component, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { ApiService } from '../api.service';
import { Function } from '../Function';
import { WorkHistoryEntry } from '../WorkHistoryEntry';

@Component({
  selector: 'app-work-history-entry',
  templateUrl: './work-history-entry.component.html',
  styleUrl: './work-history-entry.component.css'
})
export class WorkHistoryEntryComponent {
	constructor (private apiService: ApiService) { }
	@Input() entry: WorkHistoryEntry;

	functions: Array<Function> = null;

	endDate: string = '';
	startDate: string = '';

	isExpanded: boolean = false;

	ngOnInit()
	{
		this.startDate = formatDate(this.entry.StartDate, 'MMM yyyy', 'en-US');
		this.endDate = formatDate(this.entry.EndDate, 'MMM yyyy', 'en-US');
		this.refreshFunctions();
	}

	refreshFunctions()
	{
		this.apiService.getPositionFunctions(this.entry.PositionID).subscribe((data:any) => {
			this.functions = data.history;
		});
	}

	toggleExpansion()
	{
		this.isExpanded = !this.isExpanded;
	}
}
