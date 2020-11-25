import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person/detail.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person/list.component';
import { RouterModule } from '@angular/router';
import { PersonCreateComponent } from './person/person-create/person-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
