import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SearchVideoComponent } from './views/search-video/search-video.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-video/:query', component: SearchVideoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
