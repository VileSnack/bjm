import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { MessagesComponent } from './messages/messages.component';
import { AdFeedComponent } from './ad-feed/ad-feed.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { RegisterComponent } from './register/register.component';
import { NamingStyleComponent } from './naming-style/naming-style.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { IndustriesPanelComponent } from './industries/industries-panel.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployersPanelComponent } from './employers/employers-panel.component';
import { SelectIndustryComponent } from './industries/select-industry.component';
import { EditEmployerComponent } from './employers/edit-employer.component';
import { PositionsPanelComponent } from './positions/positions-panel.component';
import { SelectEmployerComponent } from './employers/select-employer.component';
import { EditPositionComponent } from './positions/edit-position.component';
import { WorkHistoryEntryComponent } from './work-history/work-history-entry.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		HomePageComponent,
		ProfileComponent,
		TopBarComponent,
		UserCardComponent,
		NewsfeedComponent,
		MessagesComponent,
		AdFeedComponent,
		WorkHistoryComponent,
		RegisterComponent,
		NamingStyleComponent,
		UserTypeComponent,
		IndustriesPanelComponent,
		AdminPageComponent,
		EmployersPanelComponent,
		SelectIndustryComponent,
		EditEmployerComponent,
		PositionsPanelComponent,
		SelectEmployerComponent,
		EditPositionComponent,
		WorkHistoryEntryComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
