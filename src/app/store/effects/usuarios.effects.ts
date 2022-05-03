import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import * as UsuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsuariosActions.cargarUsuarios),
      tap((data) => console.log('effect tap', data)),
      mergeMap(() =>
        this.usuarioService
          .getUsers()
          .pipe(tap((data) => console.log('getUser effects', data)))
      )
    )
  );
}
