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
    component: RetroOvalCatEyeComponent,
     data: { 
      title: 'Retro Y2K Oval Cat Eye Sunglasses – Viral Summer Trend',
      description: 'Sleek, lightweight, and totally Insta-ready – these cat eye sunnies are the must-have accessory for 2025. Perfect for narrow faces and 100% UV protected.'
     }
     
  }
];
