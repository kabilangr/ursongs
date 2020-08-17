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
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SearchlistService } from './service/searchlist.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    SearchComponent,
    ListComponent,
    ContactusComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [SearchlistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
