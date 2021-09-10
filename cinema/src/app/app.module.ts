import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShowingComponent } from "./showing/showing.component";
import { CinemaInputComponent } from "./shared/cinema-input/cinema-input.component";
import { PanelButtonComponent } from "./shared/panel-button/panel-button.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowingComponent,
    CinemaInputComponent,
    PanelButtonComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
