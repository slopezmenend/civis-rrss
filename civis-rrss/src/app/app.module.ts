import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProfileFormViewComponent } from './profile-form-view/profile-form-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileSideViewComponent } from './profile-side-view/profile-side-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MuroViewComponent } from './muro-view/muro-view.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { UserlistComponent } from './userlist/userlist.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';

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
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3knlgbm1.us.auth0.com',
      clientId: 'tUwbY67kocLQxV4vjBinKwZnfA2yky6j'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
