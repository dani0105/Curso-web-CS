import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/servicios/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit{


  public mensaje; // se enlaza al ngmodel del input. se usa para poder obtener el texto de la peticion
  public mensajes; // se usa para almacenar una lista de comentarios

  constructor(private comentarioService:ComentarioService){
    this.mensajes = []
  }

  // esta funcion se ejecuta apenas el comentarios se carga
  ngOnInit(): void { 
    this.traerComentarios(); // esta funcion trae los comentarios desde la api(servidor)
  }

  // se activa cuando se hace click en guardar. se encarga de mandar los comentarios a la api(servidor)
  public enviar(){

    // se suscribe a la peticion realizada con el objetivo de esperar la resupuesta
    this.comentarioService.guardarComentario(this.mensaje).subscribe( result =>{
      // entra aqui en caso de exito
      console.log("Comentario guardado",result)
      this.traerComentarios();
    },error =>{
      // entra aqui en caso de fallo
      console.log("Error al enviar el comentario")

    })
    
  }

  public traerComentarios(){
    // se suscribe a la peticion realizada con el objetivo de esperar la resupuesta
    this.comentarioService.traerComentario().subscribe( result =>{
      // entra aqui en caso de e
      this.mensajes = result;

    }, error => {
      // entra aqui en caso de fallo
      console.log("Error al traer los comentarios")

    })
  }


}
