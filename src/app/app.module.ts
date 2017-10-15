import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DetailComponent} from "./detail/detail.component";
import {CaseService} from "./home/case.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
