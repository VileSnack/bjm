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

	options: Array<SelectOption> = null;

	onChange()
	{
	}

	setFocus(focus: boolean)
	{
		console.log('DropdownControlComponent.setFocus() fired.');
		this.hasFocus = focus;
	}

	show() : string
	{
		return this.hasFocus && (this.inputText.length > 0) ? 'block' : 'none';
	}
}
