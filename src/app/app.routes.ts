import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { ListaComponent } from './lista/lista.component';



const APP_ROUTES: Routes = [
	{ path: '', component: ProductosComponent },
    { path: 'inicio', component: ProductosComponent },
    { path: 'listado_productos', component: ListaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'ProductosComponent' }

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);