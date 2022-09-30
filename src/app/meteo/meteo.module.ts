import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WetherContentComponent } from './widget/wether-content.component';
import { VelocityContentComponent } from './widget/velocity-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppMeteoComponent } from './app-meteo.component';



@NgModule({
  declarations: [
    WidgetComponent,
    WetherContentComponent,
    VelocityContentComponent,      
    AppMeteoComponent, 
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],   
  exports: [
    AppMeteoComponent, 
  ] 
})
export class MeteoModule { }
