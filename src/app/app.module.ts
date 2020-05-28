import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KillahComponent } from './killah/killah.component';
import { WutangComponent } from './wutang/wutang.component';
import { HomeComponent } from './home/home.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    KillahComponent,
    WutangComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
