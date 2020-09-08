import { Component,  OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Formulario';
  hideUpdate:boolean = true;
  msg:string = '';
  usuarios = null;
  usuario= {
    
    idUsuario: null,
    nombre: null,
    apellido: null,
    email: null,
    telefono: null,
    pais: null,
    comida: null,
    artista: null,
    lugar: null,
    color: null,
    pasword: null
  
    
 
  };
  usuarios2= {
    
    idUsuario: null,
    nombre: null,
    comida: null,
    artista: null,
    lugar: null,
    color: null
  
  };

  constructor(private usuariosServicio: UsuariosService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuariosServicio.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  altaUsuario() {
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          this.msg =datos['mensaje'];
          this.obtenerUsuarios();
        }
      }
    );
  }

  bajaUsuario(idUsuario) {
    this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          this.msg =datos['mensaje'];
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario() {
    this.usuariosServicio.editarUsuario(this.usuarios2).subscribe(
      datos => {
        if(datos['resultado'] == 'OK') {
          this.hideUpdate = false;
          this.msg =datos['mensaje'];
          this.obtenerUsuarios();
        }
      }
    );
  }

  seleccionarUsuario(idUsuario) {
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      result => this.usuarios2 = result[0]
    );
  }
   closeAlert():void {
    this.msg = '';
  }


 
  

}
