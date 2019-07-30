import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDatepickerModule,
  MatExpansionModule
} from '@angular/material';
import { PostCreate } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostService } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreate,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
