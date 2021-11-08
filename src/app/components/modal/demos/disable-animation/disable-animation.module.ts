import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableAnimationComponent } from './disable-animation.component';
import { UsaModalModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  declarations: [DisableAnimationComponent],
  imports: [
    CommonModule,
    UsaModalModule,
  ],
  exports: [DisableAnimationComponent]
})
export class DisableAnimationModule { }
