import { Component } from '@angular/core';
import { AgregarItemService } from './service/agregar-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';

  constructor(private agregarItem: AgregarItemService) {}
}
