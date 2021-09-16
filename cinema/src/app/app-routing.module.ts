import { SignInComponent } from "./user/sign-in/sign-in.component";
import { RegisterComponent } from "./user/register/register.component";
import { TheatresComponent } from "./theatres/theatres.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmsComponent } from "./films/films.component";
import { HomeComponent } from "./home/home.component";
import { AddFilmComponent } from "./management-tools/add-film/add-film.component";
import { AddShowingComponent } from "./management-tools/add-showing/add-showing.component";
import { EditFilmComponent } from "./management-tools/edit-film/edit-film.component";
import { EditShowingComponent } from "./management-tools/edit-showing/edit-showing.component";
import { ManagementToolsComponent } from "./management-tools/management-tools.component";
import { ShowingDetailsComponent } from "./showings/showing-details/showing-details.component";
import { ShowingsComponent } from "./showings/showings.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "showings",
    component: ShowingsComponent,
  },
  {
    path: "films",
    component: FilmsComponent,
  },
  {
    path: "buy-tickets/:id",
    component: ShowingDetailsComponent,
  },
  {
    path: "select-seats",
    component: TheatresComponent,
  },
  {
    path: "management-tools",
    component: ManagementToolsComponent,
  },
  {
    path: "add-showing",
    component: AddShowingComponent,
    pathMatch: "full",
  },
  {
    path: "edit-showing",
    component: EditShowingComponent,
  },
  {
    path: "add-film",
    component: AddFilmComponent,
  },
  {
    path: "edit-film",
    component: EditFilmComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
