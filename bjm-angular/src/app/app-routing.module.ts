import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: '', component: LoginPageComponent },
	{ path: 'home/:userID', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'profile/:userID', component: ProfileComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
