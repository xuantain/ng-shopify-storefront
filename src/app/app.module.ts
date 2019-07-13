import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, Apollo } from "apollo-angular";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    PagesModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httplink: HttpLink
  ) {
    apollo.create({
      link: httplink.create({uri: '[URL]'}),
      cache: new InMemoryCache()
    })
  }
}
