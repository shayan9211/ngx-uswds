import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputTypeComponent } from './file-input-type.component';
import { UsaFileInputModule } from '@gsa-sam/ngx-uswds';



@NgModule({
  declarations: [FileInputTypeComponent],
  imports: [
    CommonModule,
    UsaFileInputModule,
  ],
  exports: [FileInputTypeComponent]
})
export class FileInputTypeModule { }
