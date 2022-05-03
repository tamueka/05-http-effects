import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor() {}

  ngOnInit(): void {
    /*     this.usuarioService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    }); */
  }
}
