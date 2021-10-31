import { Routes } from '@angular/router';

// importo los componentes que dese enlazar a cada ruta
import { ComentarioComponent } from './componentes/comentario/comentario.component';
import { ContadorComponent } from './componentes/contador/contador.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'contador', pathMatch: 'full' }, // cuando la ruta es inicial redirigir a la ruta de contador
    { path: 'contador', component:ContadorComponent }, // la ruta de contador, muestra el ejemplo de contador
    { path: 'comentario',  component: ComentarioComponent}, // la ruta de comentario, muestra un ejemplo de servicios
    { path: '**', redirectTo: '/contador' } // para cualquier ruta que se ingrese en el navegador redirigir a contador
];