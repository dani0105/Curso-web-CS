import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// los modulos necesarios para la creacion de rutas en angular
import { ROUTES } from './app.routing';
import { RouterModule } from '@angular/router';

// modulo necesario para crear peticiones http 
import { HttpClientModule } from '@angular/common/http';

// importo mis componentes
import { ContadorComponent } from './componentes/contador/contador.component';
import { ComentarioComponent } from './componentes/comentario/comentario.component';
import { AppComponent } from './componentes/app/app.component';

// este modulos es necesario para poder hacr uso del [(ngModel)]
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent, // declare mi componente de comentarios
    ComentarioComponent // declaro mi componente de comentarios
  ],
  imports: [ // importo los modulos del proyecto
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent] // especifico el modulo principal para cargar la aplicacion
})
export class AppModule { }
