import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SelectOption } from '../SelectOption';

@Component({
	selector: 'app-dropdown-control',
	templateUrl: './dropdown-control.component.html',
	styleUrl: './dropdown-control.component.css'
})
export class DropdownControlComponent {
	@Input() options: Array<SelectOption>;
	@Output() valueChanged: EventEmitter<string> = new EventEmitter();

	hasFocus: boolean = false;

	inputText: string = '';

	match: Array<SelectOption> = [ ];

	matchDisplay: string = 'none';

	clickOption(option: SelectOption)
	{
		this.inputText = option.DisplayText;
		this.valueChanged.emit(option.DisplayText);
		this.matchDisplay = 'none';
	}

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

		this.matchDisplay = (this.match.length > 0) ? 'block' : 'none';

		this.valueChanged.emit(event.target.value);
	}

	setFocus(focus: boolean)
	{
		this.hasFocus = focus;
	}
}
