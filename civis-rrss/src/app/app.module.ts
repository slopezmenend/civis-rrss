import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProfileFormViewComponent } from './components/profile-form-view/profile-form-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileSideViewComponent } from './components/profile-side-view/profile-side-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MuroViewComponent } from './components/muro-view/muro-view.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import { UserlistComponent } from './components/userlist/userlist.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { profilereducer } from './store/profile/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile/profile.effects';
import { appReducers, EffectsArray } from './store/AppState';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { SearchListComponent } from './components/searchList/searchlist.component';
import { MyprofileViewComponent } from './components/myprofile-view/myprofile-view.component';
import { MymuroViewComponent } from './components/mymuro-view/mymuro-view.component';
import { MurolistComponent } from './components/murolist/murolist.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TimelineComponent,
    ProfileFormViewComponent,
    ProfileViewComponent,
    ProfileSideViewComponent,
    NavbarComponent,
    MuroViewComponent,
    TimelineViewComponent,
    UserlistComponent,
    SearchListComponent,
    AuthButtonComponent,
    UserdetailComponent,
    MyprofileViewComponent,
    MymuroViewComponent,
    MurolistComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3knlgbm1.us.auth0.com',
      clientId: 'tUwbY67kocLQxV4vjBinKwZnfA2yky6j'
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    //StoreModule.forRoot({ profile: profilereducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Civis App',
      maxAge: 15, // Retains last 15 states
    }),
    InfiniteScrollModule,
    //EffectsModule.forRoot([ProfileEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
