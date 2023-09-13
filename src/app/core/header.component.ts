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
    </nav>`
})
export class HeaderComponent {
}
