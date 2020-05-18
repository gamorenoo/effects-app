import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: usuario[] = [];
  constructor(public usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe( users => this.usuarios = users );
  }

}
