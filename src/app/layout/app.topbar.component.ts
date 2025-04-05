import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    sidebarVisible: boolean = false;

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) {}

    // Fonction pour basculer la visibilité du menu latéral
    toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
    }

    // Nouvelle fonction pour fermer le sidebar avec un léger délai après le clic
    closeSidebarWithDelay() {
        setTimeout(() => {
            this.sidebarVisible = false; // Ferme le sidebar après un délai
        }, 200); // Délai de 200ms pour permettre la navigation
    }

    configButton() {
        this.layoutService.showConfigSidebar();
    }
}
