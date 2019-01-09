import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { AgregarItemService } from './service/agregar-item.service';



import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
  AgregarItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
