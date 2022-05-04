import { Component, OnInit } from '@angular/core';
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
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });

    this.store.dispatch(UsuariosActions.cargarUsuarios());

    /*     this.usuarioService.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
    }); */
  }
}
