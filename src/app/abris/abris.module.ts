import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbrisComponent } from './abris.component';
import { AbrisRoutingModule } from './abris-routing.module';

@NgModule({
    imports: [CommonModule, AbrisRoutingModule],

    declarations: [AbrisComponent],
})
export class AbrisModule {}
