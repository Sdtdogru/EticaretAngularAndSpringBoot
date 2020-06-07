import {Routes, RouterModule} from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const USER_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../../user/user.module').then(m => m.UserModule)
    }
];
