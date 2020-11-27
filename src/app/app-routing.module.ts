import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person/detail.component';
import { PersonListComponent } from './person/list.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { AuthGuardService } from './services/auth.guard.service';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {
    path: '', component: PersonListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'persons/:id', component: PersonDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create', component: PersonCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit/:id', component: PersonEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'signin', component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
