import { Routes } from '@angular/router';
import { Error404Component } from "./errors/404.component";
import { ProfileComponent } from "./user/profile.component";
import {
    EventDetailsComponent,
    EventListResolver,
    EventsListComponent,
    CreateEventComponent,
    EventRouteActivator,
    CreateSessionComponent
} from './events/index'

export const appRoutes: Routes = [
    {
        path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    {
        path: 'events', component: EventsListComponent,
        resolve: {events: EventListResolver}
    },
    {
        path: 'events/:id', component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {
        path: 'user', 
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
    {path: 'events/session/new', component: CreateSessionComponent}
]