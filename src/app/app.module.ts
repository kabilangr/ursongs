import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SectionComponent, SearchComponent, ListComponent, ContactusComponent, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
