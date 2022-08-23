import { Component, VERSION } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Ana', 'Melon'),
    new Persona('Guinea', 'Martinez'),
  ];
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona() {
    let personaN = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(personaN);
  }
}
