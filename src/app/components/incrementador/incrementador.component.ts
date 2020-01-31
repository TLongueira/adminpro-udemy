import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';

   @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Porcentaje', this.porcentaje);
  }

  ngOnInit() { }

  onChanges(newValue: number) {

    const elemHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else
      if (newValue <= 0) {
        this.porcentaje = 0;
      } else {
        this.porcentaje = newValue;
      }
    this.txtProgress.nativeElement.value = this.porcentaje;
    // elemHTML.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);

  }
  cambiarValor(valor) {
    if (this.porcentaje + valor > 100) {
      return;
      // tslint:disable-next-line: align
    }
    if (this.porcentaje + valor < 0) {
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);

    this.txtProgress.nativeElement.focus();
  }
}
