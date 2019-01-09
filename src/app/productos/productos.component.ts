import { Component, OnInit } from '@angular/core';

import { AgregarItemService } from '../../app/service/agregar-item.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  constructor(private agregarItem: AgregarItemService) {}

  ngOnInit() {}
}
