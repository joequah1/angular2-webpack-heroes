import { NgModule }      		from '@angular/core';
import { SharedModule }       	from '../shared/shared.module';

import { DashboardComponent } 	from './dashboard.component';

import { routing }            	from './dashboard.routing';

@NgModule({
	imports: [
		SharedModule,
		routing
	],
	declarations: [
		DashboardComponent
	]
})
export class DashboardModule { }