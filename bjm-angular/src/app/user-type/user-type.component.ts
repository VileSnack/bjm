import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrl: './user-type.component.css'
})
export class UserTypeComponent {
	@Input() selectedValue: number;
	@Output() selectChanged: EventEmitter<number> = new EventEmitter();

	//----------------------------------------------------------------------------------------------
	// TODO: Re-factor this so that the contents are drawn from table UserTypes in the DB.
	//
	userTypes:Array<Object> = [
		{ id: 2, DisplayText: "Job seeker" },
		{ id: 3, DisplayText: "Recruiter" }
	];

	onChange()
	{
		this.selectChanged.emit(this.selectedValue);
	}
}
