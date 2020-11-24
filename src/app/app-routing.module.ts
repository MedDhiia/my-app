import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person/detail.component';
import { PersonListComponent } from './person/list.component';


const routes: Routes = [
  {
    path: '', component: PersonListComponent
  },
  {
    path: 'persons/:id', component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
