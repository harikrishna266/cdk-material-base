import { NgModule } from '@angular/core';
import { HexToRgbPipe } from './hex-to-rgb.pipe';


@NgModule({
    declarations: [
    	HexToRgbPipe
    ],
    imports: [],
    exports: [
        HexToRgbPipe,
    ],
})
export class PipesModule {}
