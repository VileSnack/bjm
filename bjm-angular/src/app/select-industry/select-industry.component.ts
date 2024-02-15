import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Industry } from '../Industry';

@Component({
  selector: 'app-select-industry',
  templateUrl: './select-industry.component.html',
  styleUrl: './select-industry.component.css'
})
export class SelectIndustryComponent {
	constructor(private dataService: DataService) { }

	@Input() selectedValue: number;
	@Output() selectChanged: EventEmitter<number> = new EventEmitter();

	industries:Array<Industry> = null;

	ngOnInit()
	{
		this.dataService.update();
	}

	notifierSubscription: Subscription = this.dataService.subjectNotifier.subscribe(notified => {
		this.industries = this.dataService.getIndustries();
	});

	onChange(newSelectedValue: number)
	{
		this.selectChanged.emit(this.selectedValue);
	}
}
