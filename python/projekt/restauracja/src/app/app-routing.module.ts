import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'restaurant', component: RestaurantComponent },
];; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

exports: [AppRoutingModule]