import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }])
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
