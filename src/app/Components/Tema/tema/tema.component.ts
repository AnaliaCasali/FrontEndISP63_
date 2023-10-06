import { Component } from '@angular/core';
import { Tema } from 'src/app/Models/tema';
import { TemaService } from 'src/app/Services/tema.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent {
  title = 'Lista de Temas';
  temas: Tema[] = [];
  constructor(private datosTemas: TemaService) {}

  ngOnInit(): void {
    this.cargarTemas();
  }

  cargarTemas(): void {
    this.datosTemas.lista().subscribe((data) => {
      this.temas = data;
    });
  }

  delete(id?: number) {
    if (id === undefined) {
      return; // Exit early if the ID is undefined
    }
  
    this.datosTemas.delete(id).subscribe(
      {
        next: (data) => {
          this.cargarTemas();
        },
        error: (err) => {
          this.showError("No fue posible borrar");
          console.error('Error:', err);
        },
        complete: () => {
          this.showOk('Borrado exitoso.');
        }
      }
    );
  }
  

  showError (msgNoOk: string) {Swal.fire({
    title: 'Error!',
    text: msgNoOk,
    icon: 'error',
    confirmButtonText: 'Aceptar'
  }); }


  showOk (msgOk: string){ Swal.fire({
    title: 'Genial!',
    text: msgOk,
    icon: 'success',
    confirmButtonText: 'Aceptar'
  }); }


}
