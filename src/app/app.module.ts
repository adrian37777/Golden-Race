import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BallserviceService } from './services/ballservice.service';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    BallSelectorComponent,
    BetSlipComponent,
    MessageComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [BallserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
