import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'example-one',
    loadComponent: () =>
      import('./features/example-one/example-one.component').then(
        (c) => c.ExampleOneComponent
      ),
  },
  {
    path: 'example-two',
    loadComponent: () =>
      import('./features/example-two/example-two.component').then(
        (c) => c.ExampleTwoComponent
      ),
  },
  {
    path: 'example-three',
    loadComponent: () =>
      import('./features/example-three/example-three.component').then(
        (c) => c.ExampleThreeComponent
      ),
  },
  {
    path: 'example-four',
    loadComponent: () =>
      import('./features/example-four/example-four.component').then(
        (c) => c.ExampleFourComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
