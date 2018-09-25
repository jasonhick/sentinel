import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { JourneyComponent } from './components/journey/journey.component';

const routes: Routes = [
  {
    path: ':product',
    component: ProductComponent
  },
  {
    path: ':product/:journey',
    component: JourneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
