import { NgModule }      from '@angular/core';
import { SharedModule }       	from './shared/shared.module';

import { AppComponent }  from './app.component';
import { NavComponent, FooterComponent } from './shared';

import { DashboardModule } 	from './+dashboard';
import { HeroesModule } 	from './+heroes';

import { HeroService } from './+heroes';

import { routing }        from './app.routing';

@NgModule({
	imports: [
		SharedModule,
		HeroesModule,
		DashboardModule,
		routing
	],
	providers: [ HeroService ],
	declarations: [
		AppComponent, NavComponent, FooterComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }