import { Component, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { WorkHistoryEntry } from '../WorkHistoryEntry';

@Component({
  selector: 'app-work-history-entry',
  templateUrl: './work-history-entry.component.html',
  styleUrl: './work-history-entry.component.css'
})
export class WorkHistoryEntryComponent {
	@Input() entry: WorkHistoryEntry;

	endDate: string = '';
	startDate: string = '';

	ngOnInit()
	{
		this.startDate = formatDate(this.entry.StartDate, 'MMM yyyy', 'en-US');
		this.endDate = formatDate(this.entry.EndDate, 'MMM yyyy', 'en-US');
	}

}
