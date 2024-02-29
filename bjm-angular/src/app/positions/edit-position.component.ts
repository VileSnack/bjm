import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Employer } from '../Employer';
import { Position } from '../Position';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrl: './edit-position.component.css'
})
export class EditPositionComponent {
	constructor (private apiService: ApiService, private dataService: DataService) { }

	@Input() position: Position;

	employer: Employer;

	isExpanded: string = 'none';

	originalTitle : string = '';

	updateMsg: string = '';

	ngOnInit()
	{
		this.employer = this.dataService.getEmployer(this.position.EmployerID);
		this.originalTitle = this.position.Title;
	}

	cancel()
	{
		this.isExpanded = 'none';
	}

	edit()
	{
		this.isExpanded = 'table-row';
	}

	onEmployerChanged(employerID: number)
	{
		this.position.EmployerID = employerID;
	}

	remove()
	{
		this.apiService.removePosition(this.position.ID).subscribe((data:any) => {
			this.dataService.update();
		});
	}

	update()
	{
		this.isExpanded = 'none';
		this.apiService.updatePosition(this.position).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => {
				this.updateMsg = '';
				this.dataService.update();
			} , 2000);
		});
	}
}
