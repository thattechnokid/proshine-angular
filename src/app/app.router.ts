import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const router: Routes = [
    {
        path: '',
        component:AppComponent
    },
    // {
    //     path:'home',
    //     component:AppComponent
    // },
    {
        path:'testimonials',
        component:TestimonialsComponent
    },
    // {
    //     path:'about',
    //     component:AppComponent
    // },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);