import { Imagen } from "./Imagen";

export class Carrera {
  id?: number;
  nombre?: string;
  sede?: string;
  numeroPlan?: number;
  campoOcupacional?: string;
  horario?: string;
  imagen?: Imagen ;

  constructor(
    nombre: string,
    sede: string,
    numeroPlan: number,
    campoOcupacional: string,
    horario: string
  ) {
    this.nombre = nombre;
    this.sede = sede;
    this.numeroPlan = numeroPlan;
    this.campoOcupacional = campoOcupacional;
    this.horario = horario;
  }
}
