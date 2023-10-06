import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/Models/carrera';
import { CarreraServicesService } from 'src/app/Services/carrera-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-carrera',
  templateUrl: './new-carrera.component.html',
  styleUrls: ['./new-carrera.component.css'],
})
export class NewCarreraComponent implements OnInit {
  isNew: boolean = false;
  id: number=-1;
  nombre: string = '';
  sede: string = '';
  plan: string = '';
  campoOcupacional: string = '';
  horario: string = '';
  carrera!: Carrera;

  imagenMin: File | null = null;
  imagen: File | null = null; // Variable to store file

  constructor(
    private carreraService: CarreraServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined)
      this.isNew = true;
    else {
      this.id = this.activatedRoute.snapshot.params['id'];
      
      this.carreraService.detail(this.id).subscribe(
        {
          next: (data) => {
            this.carrera = data;
            console.log( "esta carrera: " +  JSON.stringify( this.carrera));
          },
          error: (err) => {
            this.showError('Fallo en encontrar la carrera');
            this.router.navigate(['/carrera']);
          }
        }
    );  
    }
  }

  onCreate(): void {
    let nroPlan: number = parseInt(this.plan);
    /*creo un objeto carrera y asigno los datos del
     formulario a traves del constructor*/
    const newCarrera = new Carrera( this.nombre,
                                    this.sede,
                                    nroPlan,
                                    this.campoOcupacional,
                                    this.horario
                                  );    
    // llamo al metodo guardar del service pasando la carrera y la imagen
    this.carreraService.save(newCarrera, this.imagen).subscribe(
    {
      next: (data) => {
        this.showOk('Carrera añadida');
        this.router.navigate(['/carrera']);
      },
      error: (err) => {
        this.showError('No fue posible agregar la carrera');
        this.router.navigate(['/nuevacarrera']);
      },
      complete: () => {
        this.showOk('Se agregó con  éxito.');
      }
    }
  );

  }




  onUpdate(): void {
    if (this.isNew === false) {
      const id = this.activatedRoute.snapshot.params['id'];
      this.carreraService.update(this.carrera, this.imagen).subscribe(
        {
          next: (data) => {
            this.showOk('Carrera editada correctamente');
            this.router.navigate(['/carrera']);
          },
          error: (err) => {
            this.showError('Error al modificar la carrera');
            this.router.navigate(['/nuevacarrera']);
          },
          complete: () => {
            this.showOk('Se editó con  éxito.');
          }
        }
      );
      
    }
  }


  reset(): void {
    this.imagen = null;
    this.imagenMin = null;
  }



  onFileChange(event: any): void {
    const file: File = event.target.files[0];
      // Tamaño maximo del archivo
    const maxSize :number= 4500000; 
    this.imagen=null;
    if (file) {
      if (file.size > maxSize) {
          const tamanioEnMb = maxSize / 1000000;
          this.showError(`El tamaño máximo es ${tamanioEnMb} MB`);
      }
      else
      {
      this.imagen = file;
      const fr = new FileReader();
      fr.onload = (event: any) => {
        this.imagenMin = event.target.result;
      };
      fr.readAsDataURL(this.imagen);
    }
  }
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
