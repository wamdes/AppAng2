import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { NavigationComponent } from '../components/navigation/navigation.component'
	import { PersoComponent } from '../components/perso/perso.component'
	import { FavorisComponent } from '../components/favoris/favoris.component'
    const routes: Routes = [
        {
            path: '',
            redirectTo:'catalogue',
			pathMatch: 'full'
        },
		{
            path: 'catalogue',
            loadChildren: '../modules/catalogue/catalogue.module#CatalogueModule'
        },
		{
		   path: 'demandes',
            loadChildren: '../modules/demandes/demandes.module#DemandesModule'
        },
		{
            path: 'account',
            loadChildren: '../modules/account/account.module#AccountModule'
        },
		{
            path: 'panier',
            loadChildren: '../modules/panier/panier.module#PanierModule'
        },
		{
            path: 'perso',
            component: PersoComponent
        },
		{
            path: 'favoris',
            component: FavorisComponent
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
