import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SectionComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
