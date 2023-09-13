import {Component, computed, signal} from "@angular/core";

@Component({
  standalone: true,
  selector: 'example-three',
  template: `
    <h1>Example three</h1>
    {{ c1() }}
    {{ logFirstSignal }}
    <button (click)="logFirstSignal = !logFirstSignal">Toggle logFirstSignal</button>
    <button (click)="incrementS1()">Increment s1</button>
    <button (click)="incrementS2()">Increment s2</button>
  `
})
export class ExampleThreeComponent {
  logFirstSignal = true;
  s1 = signal(0);
  s2 = signal(0);

  c1 = computed(() =>
    this.logFirstSignal ? this.s1() : this.s2()
  );

  incrementS1() {
    this.s1.update((v) => v + 1);
  }

  incrementS2() {
    this.s2.update((v) => v + 1);
  }

}
