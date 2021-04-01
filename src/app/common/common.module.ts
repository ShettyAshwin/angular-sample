import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports : [
    ModalService
  ]
})
export class AppCommonModule {

 }
