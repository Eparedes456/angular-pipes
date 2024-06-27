import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n select

  public name: string = 'Erick';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  
  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //i18nPlural
  public clients:string[] = ['Maria','Erick','Katerin'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando.'
  }


  deleteClient():void{
    this.clients.shift()
  }

  //keyvalue pipe

  public person = {
    name: "Erick",
    age: 27,
    adress: 'Otawa, Tarapoto'
  };

  //Async pipe

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

}
