import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-amenagement',
    templateUrl: './amenagement.component.html',
    styleUrl: './amenagement.component.scss',
})
export class AmenagementComponent implements OnInit {
    menuItems = [
        {
            title: 'Pose de pavé uni ',
            content:
                "Pour votre stationnement, chemin piétonnier, terrasse et bien plus, nous sommes les experts qu'il vous faut en matière d'installation de pavé uni. Grâce à notre savoir-faire, nous vous garantissons un résultat esthétique, durable et parfaitement adapté à vos besoins.",
            isOpen: false,
        },
        {
            title: 'Restauration de pavé uni',
            content:
                'Vous voulez redonner une deuxième vie à votre pavé uni? Nous offrons des services de remise à niveau, remplacement de sable polymère, nettoyage à pression et application de scellant protecteur, pour un entretien efficace et économique.',
            isOpen: false,
        },
        {
            title: 'Muret',
            content:
                "Que ce soit pour la construction d'un muret de soutènement, la remise à neuf d'un muret affaissé ou encore la création de bacs à fleurs décoratifs et fonctionnels, nous vous offrons des solutions adaptées à vos besoins, durables et esthétiques. Confiez-nous vos projets d'aménagement extérieur, et nous les concrétiserons avec professionnalisme et expertise.",
            isOpen: false,
        },
        {
            title: 'Tourbe',
            content:
                "Que ce soit pour l’installation d’une pelouse neuve, pour refaire votre pelouse existante ou encore pour niveler votre terrain, nous sommes là pour répondre à vos besoins. Contactez-nous dès aujourd'hui pour transformer votre espace extérieur.",
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
