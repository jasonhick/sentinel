import { NgModule } from '@angular/core';

import { MatStepperModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatStepperModule, MatButtonModule, MatInputModule],
  exports: [MatStepperModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}
