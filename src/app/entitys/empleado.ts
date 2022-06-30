import { DiaLibre } from "./dia-libre";
import { JornadaLaboral } from "./jornada-laboral";
import { Vacaciones } from "./vacaciones";

export class Empleado {

    id : number;
    nombre : String;
    apellido : String;
    dni : number;
    jornadaLaboralLst : Array<JornadaLaboral>;
    vacacionesLst : Array<Vacaciones>;
    diaLibreLst : Array<DiaLibre>;

    // constructor (id : number, nombre : String, apellido : String, dni : number, jornadaLaboralLst : Array<JornadaLaboral>, 
    //     vacacionesLst : Array<Vacaciones>, diaLibreLst : Array<DiaLibre>) {
    //
    //        this.id = id;
    //        this.nombre = nombre;
    //        this.apellido = apellido;
    //        this.dni = dni;
    //        this.jornadaLaboralLst = jornadaLaboralLst;
    //        this.vacacionesLst = vacacionesLst;
     //       this.diaLibreLst = diaLibreLst;
     //   };

    constructor(){};
 

}
