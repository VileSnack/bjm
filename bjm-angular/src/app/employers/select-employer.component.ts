import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Employer } from '../Employer';

@Component({
  selector: 'app-select-employer',
  templateUrl: './select-employer.component.html',
  styleUrl: './select-employer.component.css'
})
export class SelectEmployerComponent {
	constructor(private dataService: DataService) { }

	@Input() selectedValue: number;
	@Output() selectChanged: EventEmitter<number> = new EventEmitter();

	employers:Array<Employer> = null;

	ngOnInit()
	{
		this.employers = this.dataService.getEmployers();
	}

	onChange(newSelectedValue: number)
	{
		this.selectChanged.emit(this.selectedValue);
	}
}
