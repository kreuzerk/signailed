import {Component, effect, signal} from "@angular/core";

@Component({
  standalone: true,
  selector: 'example-two',
  template: `
    <h1>Example two</h1>
    <button (click)="incrementS1()">Increment s1</button>
    `
})
export class ExampleTwoComponent {
  s1 = signal(0, {
    equal: () => true
  });

  constructor() {
    effect(() => {
      console.log('Calling the effect function of c1', this.s1());
    });
  }

  incrementS1() {
    this.s1.update((v) => v + 1);
  }
}

