import { Component, OnInit } from '@angular/core';
import { AgregarItemService } from '../../app/service/agregar-item.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor( private agregarItem: AgregarItemService ) { }

  ngOnInit() {
  }

}
