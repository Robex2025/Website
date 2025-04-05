import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLayoutDemoModule } from '../uikit/formlayout/formlayoutdemo.module';
import { MediaDemoModule } from '../uikit/media/mediademo.module';
import { TimelineDemoModule } from '../pages/timeline/timelinedemo.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        ReactiveFormsModule,
        FormLayoutDemoModule,
        MediaDemoModule,
        TimelineDemoModule,
    ],

    declarations: [DashboardComponent],
})
export class DashboardModule {}
