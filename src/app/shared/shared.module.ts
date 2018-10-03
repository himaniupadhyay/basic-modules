import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicGuard } from '../shared/guards/public.guard';
import { PrivateGuard } from '../shared/guards/private.guard';
import { AppService } from '../shared/services/app.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PrivateGuard, PublicGuard, AppService],
  declarations: []
})
export class SharedModule { }
