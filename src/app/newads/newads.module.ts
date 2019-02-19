import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewadsPage } from './newads.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NewadsPage }])
  ],
  declarations: [NewadsPage]
})
export class NewadsPageModule {}
