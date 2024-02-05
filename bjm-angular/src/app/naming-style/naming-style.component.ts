import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-naming-style',
  templateUrl: './naming-style.component.html',
  styleUrl: './naming-style.component.css'
})
export class NamingStyleComponent {
	@Input() selectedValue: number;
	@Output() selectChanged: EventEmitter<number> = new EventEmitter();

	//----------------------------------------------------------------------------------------------
	// TODO: Re-factor this so that the contents are drawn from table NamingStyles in the DB.
	//
	namingStyles:Array<Object> = [
		{ id: 1, DisplayText: "Given name, middle name(s), family name" },
		{ id: 2, DisplayText: "Family name, middle name(s), given name" },
		{ id: 3, DisplayText: "Given name, middle name(s), patronym" }
	];

	onChange()
	{
		this.selectChanged.emit(this.selectedValue);
	}
}
