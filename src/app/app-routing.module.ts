import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'contact',
                            loadChildren: () =>
                                import('./contact/contact.module').then(
                                    (m) => m.ContactModule
                                ),
                        },
                        {
                            path: 'abris',
                            loadChildren: () =>
                                import('./abris/abris.module').then(
                                    (m) => m.AbrisModule
                                ),
                        },
                        {
                            path: 'amenagement',
                            loadChildren: () =>
                                import('./amenagement/amenagement.module').then(
                                    (m) => m.AmenagementModule
                                ),
                        },
                    ],
                },

                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
                useHash: false, // <-- Désactive le mode haché ici
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
