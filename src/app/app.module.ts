import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';

import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
