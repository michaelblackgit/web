import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent }           from './app.component';
import { HomeComponent }          from './home/home.component';
import { NavbarComponent }        from './navbar/navbar.component';
import { DevelopmentComponent }   from './development/development.component';
import { ContactComponent }       from './contact/contact.component';
import { PageNotFoundComponent }  from './other/pageNotFound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'development', component: DevelopmentComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DevelopmentComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
