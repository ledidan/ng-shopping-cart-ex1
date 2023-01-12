import { PostDataComponent } from './post-data/post-data.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from '../app/components/get-data/get-data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent },
  { path: 'reactiveForms', component: ReactiveFormComponent },
  { path: 'getData', component: GetDataComponent },
  { path: 'postData', component: PostDataComponent },
  { path: '', component: HomeComponentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
