import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

// Class Logger que contém a função writeCount
export class Logger{
  //Função writeCount que recebe o parÂmetro count como um number e imprime no console o valor.
  writeCount(count: number){
    console.warn(count);
  }

}