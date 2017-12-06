import { RouterModule } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './Widgets/profile/profile.component';
import { appRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		ProfileComponent,
	],
	imports: [
		BrowserModule,
		Angular2FontawesomeModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }, // <-- debugging purposes only
		),
	],
	providers: [],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
