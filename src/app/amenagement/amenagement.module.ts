import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmenagementComponent } from './amenagement.component';
import { AmenagementRoutingModule } from './amenagement-routing.module';

@NgModule({
    imports: [CommonModule, AmenagementRoutingModule],

    declarations: [AmenagementComponent],
})
export class AmenagementModule {}
