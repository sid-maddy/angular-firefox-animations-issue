import { animate, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("onLeaveFadeAndShrink", [
      transition(":leave", [
        style({
          opacity: 1,
          height: "*",
        }),
        animate(
          "1s cubic-bezier(.8, -0.6, 0.2, 1.5)",
          style({
            opacity: 0,
            height: "0px",
            margin: "0px",
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  numItems = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  items = Array.from(Array(this.numItems).keys());

  handlePageEvent($event: PageEvent) {
    setTimeout(() => {
      this.pageIndex = $event.pageIndex;
      this.pageSize = $event.pageSize;
    }, 1000);
  }
}
