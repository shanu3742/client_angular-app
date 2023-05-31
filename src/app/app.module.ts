import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, NgForm } from '@angular/forms';
import { homeModule } from './home/home.module';
import { NestedDetailsComponent } from './nested-details/nested-details.component';
import { aboutModule } from './about/about.module';





let appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/:id',
    component: NestedDetailsComponent
  },
  {
    path: 'home/:id/:key',
    component: NestedDetailsComponent
  },
  {
    path: 'home/:id/:key/:type',
    component: NestedDetailsComponent
  },
  {
    path: 'home/:id/:key/:type/:details',
    component: NestedDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent,
    NavMenuComponent,
    NestedDetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    homeModule,
    aboutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
