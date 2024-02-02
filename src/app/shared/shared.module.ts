import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BxcodeFooterComponent } from './bxcode-footer/bxcode-footer.component';
import { BxcodeHeaderComponent } from './bxcode-header/bxcode-header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BxcodeHeaderComponent,
    BxcodeFooterComponent,
  ], exports: [
    BxcodeHeaderComponent,
    BxcodeFooterComponent,
  ]
})
export class SharedModule { }
