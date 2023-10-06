import { Component } from '@angular/core';
import { Carrera } from 'src/app/Models/carrera';
import { CarreraServicesService } from 'src/app/Services/carrera-services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css'],
})
export class CarreraComponent {
  title = 'Lista de Carreras';
  carreras: Carrera[] = [];
  constructor(private datosCarreras: CarreraServicesService) {}

  ngOnInit(): void {
    this.cargarCarreras();
  }

  cargarCarreras(): void {
    this.datosCarreras.lista().subscribe((data) => {
      this.carreras = data;
    });
  }

  delete(id?: number) {
    if (id === undefined) {
      return; // Exit early if the ID is undefined
    }
  
    this.datosCarreras.delete(id).subscribe(
      {
        next: (data) => {
          this.cargarCarreras();
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
