import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BannerHeroComponent } from './components/banner-hero/banner-hero.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeFeedComponent } from './components/home-feed/home-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerHeroComponent,
    FeedComponent,
    HomeFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}