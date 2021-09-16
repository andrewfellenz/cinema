import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShowingComponent } from "./showings/showing/showing.component";
import { PanelButtonComponent } from "./shared/panel-button/panel-button.component";
import { HomeComponent } from "./home/home.component";
import { ShowingsComponent } from "./showings/showings.component";
import { ShowingDetailsComponent } from "./showings/showing-details/showing-details.component";
import { ManagementToolsComponent } from "./management-tools/management-tools.component";
import { AddShowingComponent } from "./management-tools/add-showing/add-showing.component";
import { AddFilmComponent } from "./management-tools/add-film/add-film.component";
import { EditFilmComponent } from "./management-tools/edit-film/edit-film.component";
import { EditShowingComponent } from "./management-tools/edit-showing/edit-showing.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilmsComponent } from "./films/films.component";
import { FilmComponent } from "./films/film/film.component";
import { TimeFormat } from "./pipes/time.pipe";
import { TheatresComponent } from "./theatres/theatres.component";
import { SeatComponent } from "./theatres/seat/seat.component";
import { RegisterComponent } from "./user/register/register.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowingComponent,
    PanelButtonComponent,
    HomeComponent,
    ShowingsComponent,
    ShowingDetailsComponent,
    ManagementToolsComponent,
    AddShowingComponent,
    AddFilmComponent,
    EditFilmComponent,
    EditShowingComponent,
    FilmsComponent,
    FilmComponent,
    TimeFormat,
    TheatresComponent,
    SeatComponent,
    RegisterComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
