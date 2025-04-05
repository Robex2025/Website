import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService, AppConfig } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private primengConfig: PrimeNGConfig,
        private layoutService: LayoutService
    ) {}

    ngOnInit(): void {
        this.primengConfig.ripple = true; //enables core ripple functionality

        const config: AppConfig = {
            ripple: true,
            inputStyle: 'outlined',
            menuMode: 'static',
            colorScheme: 'dark',
            theme: 'arya-orange',
            scale: 14,
        };
        this.layoutService.config.set(config);
    }
}
