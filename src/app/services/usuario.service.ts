import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {user: '01', firstName: 'Omar', lastName: 'Robles', sex: 'Femenino'},
    {user: '02', firstName: 'Omar', lastName: 'Loarte', sex: 'Femenino'},
    {user: '03', firstName: 'Klever', lastName: 'Robles', sex: 'Femenino'},
    {user: '04', firstName: 'Dilan', lastName: 'Blas', sex: 'Femenino'},
    {user: '05', firstName: 'Omar', lastName: 'Robles', sex: 'Femenino'},
    {user: '06', firstName: 'Tacuchi', lastName: 'Robles', sex: 'Femenino'},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
}
