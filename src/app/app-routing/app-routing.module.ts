import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { NavigationComponent } from '../components/navigation/navigation.component'

    const routes: Routes = [
        
		{
            path: '',
            loadChildren: '../modules/catalogue/catalogue.module#CatalogueModule'
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
