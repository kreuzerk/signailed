import { Component, computed, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'example-five',
  template: `
    <h1>Example five</h1>
    <button (click)="incrementS1()">Increment s1</button>
    <p>{{ c2() }}</p>
  `,
})
export class ExampleFiveComponent {
  s1 = signal(0);
  c1 = computed(() => {
    console.log('Calling the computation function of c1');
    return this.s1() + 1;
  });
  c2 = computed(() => {
    console.log('Calling the computation function of c2');
    return `Value of s1 + 1: ${this.c1()}`;
  });

  incrementS1() {
    this.s1.update((v) => v + 1);
  }
}
