import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users/:id', component: UserProfileComponent }
];
