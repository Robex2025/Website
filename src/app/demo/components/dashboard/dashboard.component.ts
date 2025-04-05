import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    contact: FormGroup;
    events: any[] = [];

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService,
        private fb: FormBuilder
    ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initChart();
            });
    }

    ngOnInit() {
        this.contact = this.fb.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            note: [''],
        });

        this.initChart();
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' },
        ];

        this.events = [
            {
                status: 'Demande de soumission : Contactez-nous afin de nous faire part de votre projet.',
                icon: '1',
                color: '#ffd54f',
            },
            {
                status: 'Rencontre primaire : Première rencontre afin de prendre connaissance de vos idées et besoins.',
                icon: '2',
                color: '#ffd54f',
            },
            {
                status: "Création d’un plan et d’une soumission: Selon l’ampleur du projet, un membre de notre équipe ou un designer paysagiste s'affaire à concevoir un plan personnalisé ainsi qu’une soumission détaillée du projet.",
                icon: '3',
                color: '#ffd54f',
            },
            {
                status: 'Rencontre secondaire : Deuxième rencontre ayant pour but de bien vous expliquez le projet et répondre à toutes vos interrogations.',
                icon: '4',
                color: '#ffd54f',
            },
            {
                status: 'Acceptation finale : Dernière étape avant la création, nous signons le contrat de travail et statuons sur la date de début des travaux.',
                icon: '5',
                color: '#ffd54f',
            },
            {
                status: 'Réalisation du projet : L’étape tant attendue arrive enfin, notre équipe dévoué procédera à la conception de votre espace unique de qualité/durable/esthétique',
                icon: '6',
                color: '#ffd54f',
            },
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    tension: 0.4,
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: 0.4,
                },
            ],
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
