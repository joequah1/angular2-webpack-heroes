import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{ path : '', redirectTo : '/dashboard', pathMatch : 'full' },
	{ path: 'dashboard', loadChildren: 'app/+dashboard/dashboard.module' },
	{ path: 'heroes', loadChildren: 'app/+heroes/heroes.module' }
];

export const routing = RouterModule.forRoot(appRoutes);