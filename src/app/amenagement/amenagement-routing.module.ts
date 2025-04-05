import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AmenagementComponent } from './amenagement.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: AmenagementComponent }]),
    ],
    exports: [RouterModule],
})
export class AmenagementRoutingModule {}
