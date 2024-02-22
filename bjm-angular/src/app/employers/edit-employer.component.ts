import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../data.service';
import { Employer } from '../Employer';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrl: './edit-employer.component.css'
})
export class EditEmployerComponent {
	constructor (private apiService: ApiService, private dataService: DataService) { }

	@Input() employer: Employer;

	isExpanded: string = 'none';

	originalName : string = '';

	updateMsg: string = '';

	ngOnInit()
	{
		this.originalName = this.employer.Name;
	}

	cancel()
	{
		this.isExpanded = 'none';
	}

	edit()
	{
		this.isExpanded = 'table-row';
	}

	onIndustryChanged(industryID: number)
	{
		this.employer.IndustryID = industryID;
	}

	remove()
	{
		this.apiService.removeEmployer(this.employer.ID).subscribe((data:any) => {
			this.dataService.update();
		});
	}

	update()
	{
		this.isExpanded = 'none';
		this.apiService.updateEmployer(this.employer).subscribe((data:any) => {
			this.updateMsg = data.msg;
			setTimeout(() => {
				this.updateMsg = '';
				this.dataService.update();
			} , 2000);
		});
	}
}
