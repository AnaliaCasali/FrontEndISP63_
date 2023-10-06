import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/Models/tema';
import { TemaService } from 'src/app/Services/tema.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-tema',
  templateUrl: './new-tema.component.html',
  styleUrls: ['./new-tema.component.css']
})
export class NewTemaComponent implements OnInit {
  isNew: boolean = false;
  id: number=-1;
  nomTema: string = '';

  tema!: Tema;


  constructor(
    private temaService: TemaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === undefined)
        this.isNew = true;
    else {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.temaService.detail(this.id).subscribe(
        {
          next: (data) => {
            this.tema = data;
         //   console.log( "esta tema: " +  JSON.stringify( this.tema));
          },
          error: (err) => {
            this.showError('Fallo en encontrar el tema');
            this.router.navigate(['/tema']);
          }
        }
    );  
    }
  }

  onCreate(): void {
    const newTema = new Tema( this.nomTema)      ;    
    this.temaService.save(newTema).subscribe(
    {
      next: (data) => {
        this.showOk('Tema añadido');
        this.router.navigate(['/tema']);
      },
      error: (err) => {
        this.showError('No fue posible agregar el tema');
        this.router.navigate(['/nuevotema']);
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
      this.temaService.update(this.tema).subscribe(
        {
          next: (data) => {
            this.showOk('Tema editada correctamente');
            this.router.navigate(['/tema']);
          },
          error: (err) => {
            this.showError('Error al modificar el tema');
            this.router.navigate(['/nuevotema']);
          },
          complete: () => {
            this.showOk('Se editó con  éxito.');
          }
        }
      );
      
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
