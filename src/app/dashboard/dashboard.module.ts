import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../shared/shared.module';
import { MaterialWidgetsModule } from '../material-widgets/material-widgets.module';
import { PipesModule } from '../shared/pipes/pipes.module';

import { ToDoListComponent } from './dashboard-widgets/to-do-list/to-do-list.component';
import { NewMessagesComponent } from './dashboard-widgets/new-messages/new-messages.component';
import { ChatSmallComponent } from './dashboard-widgets/chat-small/chat-small.component';
import { DashcardComponent } from './dashboard-widgets/dashcard/dashcard.component';
import { LineChartWideComponent } from './dashboard-widgets/line-chart-wide/line-chart-wide.component';
import { LineChartSmallComponent } from './dashboard-widgets/line-chart-small/line-chart-small.component';
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
export const ROUTES: Routes = [
   { path: 'dashboard', component: DashboardComponent }, 
];
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MaterialWidgetsModule,
    PipesModule,
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
  ],
  declarations: [DashboardComponent,
    ToDoListComponent,
    NewMessagesComponent,
    ChatSmallComponent,
    DashcardComponent,
    LineChartWideComponent,
    LineChartSmallComponent
  ],
  exports:[
    ToDoListComponent,
    NewMessagesComponent,
    ChatSmallComponent,
    DashcardComponent,
    LineChartWideComponent,
    LineChartSmallComponent
  ]
})
export class DashboardModule { }