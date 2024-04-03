import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Employer } from '../Employer';
import { SelectOption } from '../SelectOption';
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

	employers: Array<SelectOption> = [];

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

	onEmployerNameChange(value: string)
	{
		this.newWorkHistoryInput.EmployerName = value;
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

		this.employers.length = 0;

		this.apiService.getEmployers().subscribe((data:any) => {
			data.employers.forEach((employer) => {
				this.employers.push({ Value: employer.ID, DisplayText: employer.Name, MatchText: employer.Name.toLowerCase().replace(/[^a-z0-9]/g, '') });
			});
		});
	}

	toggleAdd()
	{
		this.addIsExpanded = !this.addIsExpanded;
	}
}
