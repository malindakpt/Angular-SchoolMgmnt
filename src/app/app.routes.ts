import { ProfileComponent } from './Widgets/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
	{ path: 'profile', component: ProfileComponent },
	// { path: 'hero/:id', component: HeroDetailComponent },
	// {
	// 	path: 'heroes',
	// 	component: HeroListComponent,
	// 	data: { title: 'Heroes List' }
	// },
	// {
	// 	path: '',
	// 	redirectTo: '/heroes',
	// 	pathMatch: 'full',
	// },
	// { path: '**', component: PageNotFoundComponent }
];
