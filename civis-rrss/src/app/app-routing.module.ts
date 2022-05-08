import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuroViewComponent } from './components/muro-view/muro-view.component';
import { MymuroViewComponent } from './components/mymuro-view/mymuro-view.component';
import { MyprofileViewComponent } from './components/myprofile-view/myprofile-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { SearchListComponent } from './components/searchList/searchlist.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';





const routes: Routes = [
  { path: 'profile/:id', component: ProfileViewComponent },
  { path: 'muro/:id', component: MuroViewComponent },
  { path: 'myprofile', component: MyprofileViewComponent },
  { path: 'mymuro', component: MymuroViewComponent },
  { path: 'timeline', component: TimelineViewComponent },
  { path: 'search', component: SearchListComponent},
  { path: '**', component: TimelineViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
