import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { FormLayoutDemoModule } from '../demo/components/uikit/formlayout/formlayoutdemo.module';

@NgModule({
    imports: [CommonModule, ContactRoutingModule, FormLayoutDemoModule],

    declarations: [ContactComponent],
})
export class ContactModule {}
