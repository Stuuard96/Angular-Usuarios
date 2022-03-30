import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

const listUsuarios: Usuario[] = [
  {user: '01', firstName: 'Omar', lastName: 'Robles', sex: 'Femenino'},
  {user: '02', firstName: 'Omar', lastName: 'Loarte', sex: 'Femenino'},
  {user: '03', firstName: 'Klever', lastName: 'Robles', sex: 'Femenino'},
  {user: '04', firstName: 'Dilan', lastName: 'Blas', sex: 'Femenino'},
  {user: '05', firstName: 'Omar', lastName: 'Robles', sex: 'Femenino'},
  {user: '06', firstName: 'Tacuchi', lastName: 'Robles', sex: 'Femenino'},
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'sex', 'actions'];
  dataSource = new MatTableDataSource(listUsuarios);  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
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
