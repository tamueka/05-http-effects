import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';

// Modulos
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, UsuariosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
