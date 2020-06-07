import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';

import {Full_ROUTES} from './shared/routes/full-layout.routes';
import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';

import {AuthGuard} from './shared/auth/auth-guard.service';
import {UserComponent} from './user/user.component';
import {USER_ROUTES} from './shared/routes/user-layout.routes';
//TODO : localStorage den rol çekilecek
const adminPath = "admin"

const appRoutes: Routes = [
    {
        path: adminPath,
        redirectTo: 'admin/dashboard/dashboard1',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
    },
    {path: adminPath, component: FullLayoutComponent, data: {title: 'full user Views'}, children: Full_ROUTES, canActivate: [AuthGuard]},
    {path: 'content', component: ContentLayoutComponent, data: {title: 'content Views'}, children: CONTENT_ROUTES},
    {path: 'index', component: UserComponent, data: {title: 'user Views'}, children: USER_ROUTES},
    {
        path: '**',
        redirectTo: 'content/pages/error'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
