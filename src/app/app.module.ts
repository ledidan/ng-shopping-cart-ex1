import { GetDataComponent } from '../app/components/get-data/get-data.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PromoteCodeComponent } from './promote-code/promote-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PromoteCodeComponent,
    AddressComponent,
    PageNotFoundComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    HighLightDirective,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
