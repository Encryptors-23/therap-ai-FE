import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { TopicBubbleComponent } from './topic-bubble/topic-bubble.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MessageAreaComponent } from './message-area/message-area.component';
import { InputComponent } from './message-area/input/input.component';
import { DisclaimerComponent } from './message-area/disclaimer/disclaimer.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopicBubbleComponent,
    MessageAreaComponent,
    InputComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
