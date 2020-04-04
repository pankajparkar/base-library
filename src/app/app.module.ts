import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
