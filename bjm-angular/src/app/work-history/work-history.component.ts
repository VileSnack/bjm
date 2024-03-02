import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { WorkHistoryEntry } from '../WorkHistoryEntry';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
	constructor (private apiService: ApiService) { }
	@Input() userID: number;

	history: Array<WorkHistoryEntry> = null;

	addIsExpanded: boolean = false;

	ngOnInit()
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
