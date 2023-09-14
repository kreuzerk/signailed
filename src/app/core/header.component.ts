import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  template: `
    <nav>
      <a routerLink="example-one">Example one</a>
      <a routerLink="example-two">Example two</a>
      <a routerLink="example-three">Example three</a>
      <a routerLink="example-four">Example four</a>
    </nav>`
})
export class HeaderComponent {
}
