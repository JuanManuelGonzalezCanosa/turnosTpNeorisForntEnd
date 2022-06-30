import { TipoDeJornadaLaboral } from "./tipo-de-jornada-laboral";

export class DiaLibre {

	id : number;
	dia : Date;
	tipoJornadaLaboral : TipoDeJornadaLaboral = TipoDeJornadaLaboral.DIALIBRE;

	constructor () {};

}
