import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';
import { 
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatChipsModule,
        MatCardModule,
        MatInputModule,
        MatProgressBarModule,
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
    } from '@angular/material';

import { NgxCarouselModule } from 'ngx-carousel';
import { ChartModule } from 'angular2-chartjs';
import 'highlight.js/styles/github.css';
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*components*/
import { SortingTableComponent } from './sorting-table/sorting-table.component';
import { SortingTableService } from './sorting-table/sorting-table.service';

export function highlightJsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  return hljs;
}
export const ROUTES: Routes = [
    { path: 'sorting-table', component: SortingTableComponent }
];
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
        MatTableModule,
        MatTabsModule,
        MatPaginatorModule,
        MatSortModule,
        HttpModule,
        MatCheckboxModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightJsModule.forRoot({
            provide: HIGHLIGHT_JS,
            useFactory: highlightJsFactory
        }),

        RouterModule.forChild(ROUTES),

    ],
    entryComponents: [],
    declarations: [ 
        SortingTableComponent,
    ],
    exports:[
        SortingTableComponent,
    ],
    providers: [
        SortingTableService,
    ]
})
export class TablesModule { }
