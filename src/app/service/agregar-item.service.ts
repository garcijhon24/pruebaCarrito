import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarItemService {
  productos = [
    {
      codigo: 1,
      titulo: 'titulo 1',
      precio: 10,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 2,
      titulo: 'titulo 2',
      precio: 20,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 3,
      titulo: 'titulo 3',
      precio: 15,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 4,
      titulo: 'titulo 4',
      precio: 18,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 5,
      titulo: 'titulo 5',
      precio: 5,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 6,
      titulo: 'titulo 6',
      precio: 30,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 7,
      titulo: 'titulo 7',
      precio: 100,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 99,
      titulo: 'titulo 8',
      precio: 20,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 9,
      titulo: 'titulo 9',
      precio: 77,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 10,
      titulo: 'titulo 10',
      precio: 76,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 11,
      titulo: 'titulo 11',
      precio: 15,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 12,
      titulo: 'titulo 12',
      precio: 8,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 13,
      titulo: 'titulo 13',
      precio: 110,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 14,
      titulo: 'titulo 14',
      precio: 23,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 15,
      titulo: 'titulo 15',
      precio: 47,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 16,
      titulo: 'titulo 16',
      precio: 55,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 17,
      titulo: 'titulo 17',
      precio: 90,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 18,
      titulo: 'titulo 18',
      precio: 34,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 19,
      titulo: 'titulo 19',
      precio: 72,
      imagen: '../assets/img/logo.png'
    },
    {
      codigo: 20,
      titulo: 'titulo 20',
      precio: 21,
      imagen: '../assets/img/logo.png'
    }
  ];

  items: any[] = [];
  sum = 0;
  constructor() {}

  agregar_item(item_producto: any, index: number) {
    console.log(index);
    for (let item of this.items) {
      if (item.codigo == item_producto.codigo) {
        return;
      }
    }

    this.items.push(item_producto);
    this.productos.splice(index, 1);
    this.sum = 0;

    for (let item of this.items) {
      this.sum = this.sum + item.precio;
    }
  }

  eliminar_item(index: any, item_producto: any) {
    console.log(item_producto);
    this.productos.push(item_producto);
    this.items.splice(index, 1);
  }
}
