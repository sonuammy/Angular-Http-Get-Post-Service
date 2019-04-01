import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookData } from './book-data';
import { HttpModule } from '@angular/http';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { BookService } from './book.service';


@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(BookData)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
