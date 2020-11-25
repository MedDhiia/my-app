import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person/detail.component';
import { PersonListComponent } from './person/list.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';


const routes: Routes = [
  {
    path: '', component: PersonListComponent
  },
  {
    path: 'persons/:id', component: PersonDetailComponent
  },
  {
    path: 'create', component: PersonCreateComponent
  },
  {
    path: 'edit/:id', component: PersonEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
