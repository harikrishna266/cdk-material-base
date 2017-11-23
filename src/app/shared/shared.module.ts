import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';

import { 
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        MatProgressBarModule,
        MatDialogModule,
        MatTableModule,

    } from '@angular/material';


import { MorisLineChartComponent } from './moris-charts/line-chart/line-chart.component';


import { FeedsComponent } from './feeds/feeds.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { CardComponent } from './card/card.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';


import { ChatSenderBlockComponent } from './chat/chat-sender-block/chat-sender-block.component';
import { ChatRecieverBlockComponent } from './chat/chat-reciever-block/chat-reciever-block.component';
import { ChartModule } from 'angular2-chartjs';


import { MessagesComponent } from './new-messages/new-messages.component';
import { PipesModule } from './pipes/pipes.module';


import { ChartJsComponent } from './chartjs/chartjs.component';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    NgxCarouselModule,
    MatCardModule,
    MatProgressBarModule,
    ChartModule,
    MatInputModule,
    FormsModule,
    MatDialogModule  ,
    MatTableModule,
    PipesModule,

  ],
  declarations: [ 
    FeedsComponent,
    WeatherCardComponent,
    SliderCardComponent,
    CardComponent,
    CustomerSatisfactionComponent,
    ChatSenderBlockComponent,
    ChatRecieverBlockComponent,
    MorisLineChartComponent,
    MessagesComponent,
    ChartJsComponent,


     ],
  exports:[
    FeedsComponent,
    WeatherCardComponent,
    SliderCardComponent,
    CardComponent,
    CustomerSatisfactionComponent,
    ChartJsComponent,
    ChatSenderBlockComponent,
    ChatRecieverBlockComponent,
    MorisLineChartComponent,
    MessagesComponent,
    
  ],
  
})
export class SharedModule { }
