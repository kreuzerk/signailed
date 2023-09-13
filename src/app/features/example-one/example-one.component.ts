import { Component, computed, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'example-one',
  template: `
    <h1>Example one</h1>
    <button (click)="incrementS1()">Increment s1</button>
    <p>{{ c2() }}</p>
  `,
})
export class ExampleOneComponent {
  s1 = signal(0);
  c1 = computed(() => {
    console.log('Calling the computation function of c1');
    return this.s1() > 5;
  });
  c2 = computed(() => {
    console.log('Calling the computation function of c2');
    return `Is bigger than 5: ${this.c1()}`;
  });

  incrementS1() {
    this.s1.update((v) => v + 1);
  }
}
