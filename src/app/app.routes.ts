//src/app/app.routes.ts
import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { EditComponent } from './post/edit/edit.component';
import { DetailsComponent } from './post/details/details.component';
import { TrashComponent } from './post/trash/trash.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './post/add-contact/add-contact.component';
import { AuthGuard } from './auth.guard';

<<<<<<< HEAD

  

export const routes: Routes = [

      { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},

      

  ];
=======
export const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'add-contact', component: AddContactComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'trash', component: TrashComponent, canActivate: [AuthGuard] }
];
>>>>>>> master
