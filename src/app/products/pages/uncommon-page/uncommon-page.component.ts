import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Augusto';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  public changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernán', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente en la fila.',
    '=1': 'tenemos un cliente en la fila.',
    'other': 'tenemos # clientes en la fila.',
  };

  public deleteClient():void{
    this.clients.shift();
  }

  // keyValue Pipe
  public person = {
    name: 'Pedro',
    age: '33',
    address: 'Mexico City'
  }

  // async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡Se ha resuelto la tarea!');
      console.log('Se tiene información en la promesa');
      this.person.name = 'Augusto'
    }, 3500);
  });
}
