import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../libraries/materialElements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleTableComponent } from './people-table/people-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people-table/people/people.component';
import { HomeComponent } from './home/home.component';



@NgModule({
   declarations: [
      AppComponent,
      PeopleTableComponent,
      PeopleComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      PeopleComponent
   ]
})
export class AppModule { }
