import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { RetroOvalCatEyeComponent } from './pages/sunglasses/retro-oval-cat-eye/retro-oval-cat-eye.component';

export const routes: Routes = [
 {
    path: '',            // հիմնական route (homepage)
    component: HomeComponent
  },
  {
    path: 'retro-oval-cat-eye-sunglasses',       // /about
    component: RetroOvalCatEyeComponent
  }
];
