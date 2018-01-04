import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// start: Angular/Material
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatButtonModule,
  MatCardModule, MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';

// End: Angular Material


@NgModule({
  imports: [
    CommonModule,
    // start: Angular Material
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule,
    MatMenuModule, MatCardModule, MatIconModule,
    MatSidenavModule, MatToolbarModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule
    // End: Angular Material
  ],
  exports: [
    // start: Angular Material
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule,
    MatMenuModule, MatCardModule, MatIconModule,
    MatSidenavModule, MatToolbarModule,
    MatRadioModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule
    // End: Angular Material
  ],
  declarations: []
})
export class MaterialModule { }
