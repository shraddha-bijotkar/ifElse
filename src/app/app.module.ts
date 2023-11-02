import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { PerformanceGraphsComponent } from './performance-graphs/performance-graphs.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    DataCardsComponent,
    NewUsersComponent,
    RecentOrdersComponent,
    PerformanceGraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
