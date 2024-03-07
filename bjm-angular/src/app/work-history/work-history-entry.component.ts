import { Component, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { ApiService } from '../api.service';
import { Function } from '../Function';
import { PositionFunctionInput } from '../PositionFunctionInput';
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

	newFunction: string = '';

	updateMsg: string = '';

	ngOnInit()
	{
		this.startDate = formatDate(this.entry.StartDate, 'MMM yyyy', 'en-US');
		this.endDate = formatDate(this.entry.EndDate, 'MMM yyyy', 'en-US');
		this.refreshFunctionList();
	}

	addFunction()
	{
		this.apiService.addPositionFunction({ 'PositionID': this.entry.PositionID, 'FunctionName': this.newFunction }).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => {
				this.newFunction = '';
				this.updateMsg = '';
				this.refreshFunctionList();
			} , 2000);
		});
	}

	refreshFunctionList()
	{
		this.apiService.getPositionFunctions(this.entry.PositionID).subscribe((data:any) => {
			this.functions = data.functions;
		});
	}

	toggleExpansion()
	{
		this.isExpanded = !this.isExpanded;
	}
}
