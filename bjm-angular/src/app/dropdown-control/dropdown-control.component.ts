import { Component, ViewChild } from '@angular/core';
import { SelectOption } from '../SelectOption';

@Component({
	selector: 'app-dropdown-control',
	templateUrl: './dropdown-control.component.html',
	styleUrl: './dropdown-control.component.css'
})
export class DropdownControlComponent {
	hasFocus: boolean = false;

	inputText: string = '';

	options: Array<SelectOption> = [
		{	Value: 1,
			DisplayText: 'The Ford Motor Corporation',
			MatchText: 'fordmotorcorporation'
		},
		{	Value: 2,
			DisplayText: 'Burger King',
			MatchText: 'burgerking'
		},
		{	Value: 3,
			DisplayText: 'Mcdonalds',
			MatchText: 'mcdonalds'
		},
		{	Value: 4,
			DisplayText: 'Microsoft',
			MatchText: 'microsoft'
		},
		{	Value: 5,
			DisplayText: 'Walmart',
			MatchText: 'walmart'
		},
		{	Value: 6,
			DisplayText: 'Alphabet',
			MatchText: 'alphabet'
		},
		{	Value: 7,
			DisplayText: 'Dow Chemical Corporation',
			MatchText: 'dowchemicalcorporation'
		}
	];

	match: Array<SelectOption> = [ ];

	matchDisplay: string = 'none';

	onChange(event)
	{
		let value = event.target.value.toLowerCase().replace(/[^a-z0-9]/g, '');

		if (value.length == 0)
		{
			this.matchDisplay = 'none';
			return;
		}

		this.match.length = 0;

		this.options.forEach((option) => {
			if (option.MatchText.startsWith(value)) this.match.push(option);
		});

		this.matchDisplay = (this.match.length > 0) ? 'block' : 'none'
	}

	setFocus(focus: boolean)
	{
		this.hasFocus = focus;
	}
}
