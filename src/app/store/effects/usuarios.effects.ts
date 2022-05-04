import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.models';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      switchMap(() => {
        return this.usuariosService.getUsers().pipe(
          map((users: Usuario[]) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((error: Error) =>
            of(usuariosActions.cargarUsuariosError({ payload: error }))
          )
        );
      })
    )
  );
}
