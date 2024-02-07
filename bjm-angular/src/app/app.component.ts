import { Component } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	userData: UserData = null;
}
