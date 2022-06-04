import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuroViewComponent } from './components/muro-view/muro-view.component';
import { MymuroViewComponent } from './components/mymuro-view/mymuro-view.component';
import { MyprofileViewComponent } from './components/myprofile-view/myprofile-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { SearchListComponent } from './components/searchList/searchlist.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import {AuthGuard} from '@auth0/auth0-angular';
import { CommentlistComponent } from './components/commentlist/commentlist.component';
import { FollowerlistComponent } from './components/followerlist/followerlist.component';
import { FollowinglistComponent } from './components/followinglist/followinglist.component';





const routes: Routes = [
  { path: 'profile/:id', component: ProfileViewComponent, canActivate: [AuthGuard] },
  { path: 'muro/:id', component: MuroViewComponent, canActivate: [AuthGuard] },
  { path: 'myprofile', component: MyprofileViewComponent, canActivate: [AuthGuard] },
  { path: 'mymuro', component: MymuroViewComponent, canActivate: [AuthGuard] },
  { path: 'timeline', component: TimelineViewComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchListComponent, canActivate: [AuthGuard]},
  { path: 'following/:id', component: FollowinglistComponent, canActivate: [AuthGuard]},
  { path: 'followers/:id', component: FollowerlistComponent, canActivate: [AuthGuard]},
  { path: 'comments/:id', component: CommentlistComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: TimelineViewComponent},
  { path: '**', component: TimelineViewComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
