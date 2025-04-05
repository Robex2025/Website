import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbrisComponent } from './abris.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AbrisComponent }])],
    exports: [RouterModule],
})
export class AbrisRoutingModule {}
