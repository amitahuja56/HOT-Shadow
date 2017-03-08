import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructionComponentComponent } from './instruction-component/instruction-component.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ThankyouPopupComponent } from './thankyou-popup/thankyou-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstructionComponentComponent, InstructionComponent, ThankyouPopupComponent]
})
export class InfoModuleModule { }
