import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { WorkHistoryEntry } from '../WorkHistoryEntry';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
	@Input() userID: number;

	history: Array<WorkHistoryEntry> = null;
}
