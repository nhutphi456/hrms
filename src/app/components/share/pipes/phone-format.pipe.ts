import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const numericValue = value.replace(/\D/g, '');

    if (numericValue.length >= 9) {
      return numericValue.slice(0, 3) + '-' + numericValue.slice(3, 6) + '-' + numericValue.slice(6, 10);
    }

    return value;
  }
}
