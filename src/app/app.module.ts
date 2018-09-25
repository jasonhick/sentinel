import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { JourneyComponent } from './components/journey/journey.component';

import { MapToIterable } from '../shared/pipes/mapToIterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    JourneyComponent,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
