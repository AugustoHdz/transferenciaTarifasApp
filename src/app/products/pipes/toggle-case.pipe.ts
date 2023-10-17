import { Pipe, PipeTransform } from "@angular/core";

// augusto | toggleCase = 'AUGUSTO'
// AUGUSTO | toggleCase = 'augusto'

@Pipe({  name: 'toggleCase'})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper:boolean = false ): string {
    return (toUpper) ? value.toUpperCase() : value.toLocaleLowerCase()
  }
}
