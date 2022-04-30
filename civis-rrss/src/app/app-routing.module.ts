import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuroViewComponent } from './muro-view/muro-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: 'profile', component: ProfileViewComponent },
  { path: 'muro', component: MuroViewComponent },
  { path: 'timeline', component: TimelineViewComponent },
  { path: 'search', component: UserlistComponent},
  { path: '**', component: TimelineViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
