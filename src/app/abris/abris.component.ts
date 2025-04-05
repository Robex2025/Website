import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-abris',
    templateUrl: './abris.component.html',
    styleUrl: './abris.component.scss',
})
export class AbrisComponent implements OnInit {
    menuItems = [
        {
            title: 'Installation / démontage ',
            content:
                'Que ce soit pour un abri résidentiel, commercial ou institutionnel, nous serons en mesure d’installer solidement votre abri de façon à vous protéger durant la saison hivernale. ',
            isOpen: false,
        },
        {
            title: 'Entreposage',
            content:
                "Désencombrez votre espace en optant pour notre service d’entreposage durant la saison estivale. Nous nous occupons de  la livraison au printemps et à l'automne.",
            isOpen: false,
        },
        {
            title: 'Location',
            content:
                "Vous n’avez pas d’abris? Nous tenons en inventaire une multitude d’abris temporaires disponibles pour la location. Louez-en un pour la saison hivernale et nous s'occuperont de tout de A à Z.",
            isOpen: false,
        },
    ];

    toggleDropdown(item) {
        // Ferme tous les autres éléments
        this.menuItems.forEach((menuItem) => {
            if (menuItem !== item) {
                menuItem.isOpen = false;
            }
        });

        // Basculer l'état de l'élément sur lequel on a cliqué
        item.isOpen = !item.isOpen;
    }
    ngOnInit() {}
}
