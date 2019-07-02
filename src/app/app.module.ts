import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { BannerHeroComponent } from './components/banner-hero/banner-hero.component';
import { FeedComponent } from './components/feed/feed.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// Http & Router
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material';
import { SearchResultsComponent } from './components/search-results/search-results.component';

// Forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerHeroComponent,
    FeedComponent,
    RecipeComponent,
    NotFoundComponent,
    HomeComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}