import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[]=[];

  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'sex', 'actions'];
  dataSource! : MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.listUsuarios=this._usuarioService.getUsuario();
    this.dataSource= new MatTableDataSource(this.listUsuarios);
  }

  eliminarUsuario(index: number){
    console.log(index);

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('The user has been successfully deleted!', 'Close',{
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
