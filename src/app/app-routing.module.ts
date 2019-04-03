import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from "./library/library.component"
import {HomeComponent} from "./home/home.component"

const routes: Routes = [
    //use ng generate component directory to create new "directory" component
    // then can route to new component path

    {
    path: 'library',
    component: LibraryComponent
    }
    ,
    {
    path: '',
    component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
