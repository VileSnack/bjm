import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
	@Input() userData: any;
}
