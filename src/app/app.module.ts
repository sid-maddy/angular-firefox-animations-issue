import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PaginatePipe } from "./pipes/paginate.pipe";

@NgModule({
  declarations: [AppComponent, PaginatePipe],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatExpansionModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
