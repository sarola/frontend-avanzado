import { ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    let forbidden = true;
    const valueControl = new Date(control.value);
    const DateMin = new Date(1900, 1, 1);
    const DateMax = new Date(Date.now() );
    if (valueControl > DateMin && valueControl < DateMax) {
        forbidden = false;
    }

    console.log(control.value);
    console.log('validation: ' + (control.value > DateMin) + "|" + (control.value < DateMax));

   // const forbidden = !moment(control.value, 'MM/DD/YYYY', true).isValid();
    // const forbidden2 = !moment(control.value, 'M/D/YYYY', true).isValid();
    // const forbidden3 = !moment(control.value, 'M/DD/YYYY', true).isValid();
    // const forbidden4 = !moment(control.value, 'MM/D/YYYY', true).isValid();
    console.log('forbiddendate: ' + forbidden  + ':' + control.value);
    return forbidden ? { forbiddenDate: { value: control.value } } : null;
  };
}
