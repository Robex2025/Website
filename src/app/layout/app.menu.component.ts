import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Notre mission',
                        icon: 'pi pi-fw pi-home',
                        command: () => this.scrollToSection('mission'),
                    },
                    {
                        label: 'Nos Forfaits',
                        icon: 'pi pi-fw pi-dollar',
                        command: () => this.scrollToSection('forfaits'),
                    },
                    {
                        label: 'Demande de Soumission ',
                        icon: 'pi pi-fw pi-id-card',
                        command: () => this.scrollToSection('contact'),
                    },
                ],
            },
        ];
    }
    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
