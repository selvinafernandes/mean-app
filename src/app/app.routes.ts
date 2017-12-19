import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent }
];

@NgModule({
	imports:[
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomeComponent];