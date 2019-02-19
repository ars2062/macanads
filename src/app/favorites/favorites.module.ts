import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FavoritesPage } from './favorites.page';
import { SharedComponentModule } from '../shared-component/shared-component.module';

@NgModule({
  imports: [
    SharedComponentModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FavoritesPage }])
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
