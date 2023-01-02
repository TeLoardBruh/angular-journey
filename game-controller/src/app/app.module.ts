import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenoroddComponent } from './evenorodd/evenorodd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenoroddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
