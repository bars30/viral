import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { RetroOvalCatEyeComponent } from './pages/sunglasses/retro-oval-cat-eye/retro-oval-cat-eye.component';
import { BestSkincareTools7Component } from './pages/best-skincare-tools-7/best-skincare-tools-7.component';
import { Meta } from '@angular/platform-browser';
import { MetanailReviewHealthyNailsComponent } from './pages/metanail-review-healthy-nails/metanail-review-healthy-nails.component';
import { ThisBrownDressisGoingViralComponent } from './pages/this-brown-dressis-going-viral/this-brown-dressis-going-viral.component';

export const routes: Routes = [
 {
    path: '',            // հիմնական route (homepage)
    component: MetanailReviewHealthyNailsComponent
  },
  {
    path: 'retro-oval-cat-eye-sunglasses',       
    component: RetroOvalCatEyeComponent,
     data: { 
      title: 'Retro Y2K Oval Cat Eye Sunglasses – Viral Summer Trend',
      description: 'Sleek, lightweight, and totally Insta-ready – these cat eye sunnies are the must-have accessory for 2025. Perfect for narrow faces and 100% UV protected.'
     }
  },
  {
    path: '7-best-skincare-tools',      
    component: BestSkincareTools7Component,
  },
  {
    path: 'metanail-review-healthy-nails',      
    component: MetanailReviewHealthyNailsComponent,
      data: {
        title: 'Metanail Complex Review – Naturally Stronger, Healthier Nails in Weeks',
        description: 'Tired of brittle, dull nails? Discover how Metanail Complex helped me fix weak nails naturally this summer. Real results, natural ingredients, and a powerful formula that works.'
      }
  },
  {
    path: 'trendy-brown-mini-dress',
    component: ThisBrownDressisGoingViralComponent
  }
];
