import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from './pipe.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    PipePipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
