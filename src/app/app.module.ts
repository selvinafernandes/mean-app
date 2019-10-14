import { NgModule }	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routes';
import { AuthService } from './auth.service';


@NgModule({
	imports: [ BrowserModule , FormsModule,AppRoutingModule, HttpModule],
	declarations: [ AppComponent,LoginComponent,HomeComponent ],
	providers: [ AuthService ],	
	bootstrap: [ AppComponent ]
})

export class AppModule { }
