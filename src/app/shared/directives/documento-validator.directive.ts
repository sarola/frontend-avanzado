import {Directive, ElementRef, Attribute, OnInit, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appDocumentoValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: DocumentoValidatorDirective, multi: true}]
})
export class DocumentoValidatorDirective implements Validator {
  @Input('appDocumentoValidator') documento: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.documento ? documentoValidator(this.documento)(control)
        : null;
  }


}
export function documentoValidator( tipo_documento: string): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
      let pattern = new RegExp('((\\d){8}[A-Z]{1})|((X|Y|Z)\\d{7}[A-Z])$');

      if(tipo_documento === 'Pasaporte') {
        pattern = new RegExp('^[A-Z]{3}[0-9]{6}[a-zA-Z]?$');
      }
      const pruebaFormato = pattern.test(control.value.toString().toUpperCase());
      let pruebaLetra = false;
      const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

      let valueDni = control.value.substr(0, control.value.length - 1);
      const primerNumero = valueDni.substr(0, 1);
      if(primerNumero === 'X' || primerNumero === 'Y' || primerNumero === 'Z'){
        const restoNumeros = valueDni.substr(1, valueDni.length -1);
        switch (primerNumero) {
          case 'X':
            valueDni = restoNumeros;
            break;
          case 'Y':
            valueDni = '1' + restoNumeros;
            break;
          case 'Z':
            valueDni = '2' + restoNumeros;
            break;
          default:
            break;
        }
        console.log(valueDni);
      }
      const letra = control.value.substr(control.value.length - 1, 1).toUpperCase();

      if (letras.charAt(valueDni % 23) === letra)
        pruebaLetra = true;
      return (pruebaFormato && pruebaLetra) ? null : {'incorrecto': {value: control.value}};
    };

}
