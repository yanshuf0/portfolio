import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TerminalComponent,
    FooterComponent,
    BlogComponent,
    HomeComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent},
      { path: 'blog-post/:title', component: BlogPostComponent},
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
