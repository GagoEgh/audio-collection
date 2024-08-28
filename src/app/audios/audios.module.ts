import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudiosComponent } from './audios/audios.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AudiosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule

  ],
  exports:[AudiosComponent]
})
export class AudiosModule { }
