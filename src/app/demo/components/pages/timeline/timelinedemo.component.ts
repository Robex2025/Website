import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './timelinedemo.component.html',
    styleUrls: ['./timelinedemo.scss'],
    selector: 'app-timelinedemocomponent',
})
export class TimelineDemoComponent implements OnInit {
    events1: any[] = [];

    ngOnInit() {
        this.events1 = [
            {
                status: 'Demande de soumission',
                icon: '1',
                color: '#FCC11D',
            },
            {
                status: 'Rencontre primaire',
                icon: '2',
                color: '#FCC11D',
            },
            {
                status: 'Création d’un plan et d’une soumission',
                icon: '3',
                color: '#FCC11D',
            },
            {
                status: 'Rencontre secondaire',
                icon: '4',
                color: '#FCC11D',
            },
            {
                status: 'Acceptation finale',
                icon: '5',
                color: '#FCC11D',
            },
            {
                status: 'Réalisation du projet',
                icon: '6',
                color: '#FCC11D',
            },
        ];
    }
}
