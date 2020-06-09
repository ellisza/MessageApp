import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MessageAppComponent } from './message-app.component';
import{ MessageDashboardComponent} from './Messaging/message-dashboard.compontent';

@NgModule({
  declarations: [
    MessageAppComponent,
    MessageDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MessageAppComponent]
})
export class AppModule { }
