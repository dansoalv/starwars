import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PeopleTableComponent } from './people-table/people-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: PeopleTableComponent},
  {path: 'personajes', component: PeopleTableComponent},
  {path: 'personajes/:ordenar', component: PeopleTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  enableTracing: false, // <-- debugging purposes only
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
