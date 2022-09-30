import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MeteoModule } from './meteo/meteo.module';
import { HttpSolidModule } from './http-solid/http-solid.module';
import { HttpSolid2Module } from './http-solid2/http-solid2.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeteoModule,
    HttpSolidModule,
    HttpSolid2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
