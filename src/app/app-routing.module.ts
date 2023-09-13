import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'example-one',
  loadComponent: () => import('./features/example-one/example-one.component').then(c => c.ExampleOneComponent)
},
  {
    path: 'example-two',
    loadComponent: () => import('./features/example-two/example-two.component').then(c => c.ExampleTwoComponent)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
