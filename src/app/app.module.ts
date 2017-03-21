import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    DashboardComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
