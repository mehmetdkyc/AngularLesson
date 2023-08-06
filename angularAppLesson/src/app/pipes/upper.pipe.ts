import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCustomPipe'
})
export class UpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var name = value as string;
    return `@${name.toUpperCase()}`; //gelen stringi büyük harf yap ve başına @ işareti ekle pipe'ı örnek.
  }

}
