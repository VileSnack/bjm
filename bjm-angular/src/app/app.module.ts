import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  AdFeedComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
