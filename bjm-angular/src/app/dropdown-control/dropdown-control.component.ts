import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-control',
  templateUrl: './dropdown-control.component.html',
  styleUrl: './dropdown-control.component.css'
})
export class DropdownControlComponent {
	inputText: string = '';

	show: boolean = true;
}
