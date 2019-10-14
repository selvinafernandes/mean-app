import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { User } from './users/user';
import { Subscription }   from 'rxjs/Subscription';
import { AuthService } from './auth.service';

@Component ({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	providers: [ AuthService ]
}) 

export class AppComponent implements OnInit, OnDestroy { 
	
	constructor(@Inject(AuthService) private authService: AuthService ) { }

	ngOnInit() {

	}

	ngOnDestroy() {

	}

}