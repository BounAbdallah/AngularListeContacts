//src/app/app.routes.ts
import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { EditComponent } from './post/edit/edit.component';
import { DetailsComponent } from './post/details/details.component';
import { TrashComponent } from './post/trash/trash.component';
import { LoginComponent } from './login/login.component';
import { AddContactComponent } from './post/add-contact/add-contact.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'add-contact', component: AddContactComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'trash', component: TrashComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' } // Redirection des chemins non définis
];

// import { IndexComponent } from './post/index/index.component';

// import { ViewComponent } from './post/view/view.component';

// import { CreateComponent } from './post/create/create.component';

// // import { EditComponent } from './post/edit/edit.component';

  

// export const routes: Routes = [

//       { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},

//       { path: 'post/index', component: IndexComponent },

//       { path: 'post/:postId/view', component: ViewComponent },

//       { path: 'post/create', component: CreateComponent },

//       { path: 'post/:postId/edit', component: EditComponent } 

//   ];

