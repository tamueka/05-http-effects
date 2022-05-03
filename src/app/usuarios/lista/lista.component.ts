import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as UsuariosActions from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(UsuariosActions.cargarUsuarios());

    /*     this.usuarioService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    }); */
  }
}
