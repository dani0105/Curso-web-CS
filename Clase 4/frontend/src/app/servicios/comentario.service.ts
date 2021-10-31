import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  // inserto el modulo httpClient en la variable http
  constructor(private http:HttpClient) { 

  }

  // servicio para guardar comentarios 
  public guardarComentario(mensaje){
    // armo el cuerpo de la solicitud
    const param = {
      comment:mensaje
    }

    // mando la solicitud y retorno un observable
    return this.http.post("https://curso-web-backend.herokuapp.com/comment",param);
  }

  // servicio para cargar comentarios 
  public traerComentario(){
    return this.http.get("https://curso-web-backend.herokuapp.com/comment");
  }


}
