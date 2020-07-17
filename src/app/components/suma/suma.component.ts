import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  //declaracion de atributos
  private arr: Array<number>;
  private objR: any;
  private signos: Array<string>;
  private combinaciones: any;
  public numberSum = 100;
  @ViewChild('resp', { static: true }) resp: ElementRef;

  //inicializacion de variables
  constructor(private r: Renderer2) {
    this.arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.objR = [];
    this.signos = ["+", "-", ""];
    this.combinaciones = [];
  }

  //apenas se acrge el moduo ejecutamos las funciones
  //principales
  ngOnInit(): void {
    this.objR = this.asignarSignos(0);
    this.correJson(this.objR);
    this.compComb(this.combinaciones);
  }

  //esta funcion crea un arreglo con todas las
  //diferentes combinaciones entre numeros y signos
  asignarSignos(index) {

    let objA = {
      'num': this.arr[index],
      'opArr': []
    }

    if ((index) + 1 != this.arr.length) {
      objA.opArr = [];
      for (let i = 0; i < this.signos.length; i++) {
        objA.opArr.push({
          'op': this.signos[i],
          'obj': this.asignarSignos(index + 1)
        })
      }
    }
    return objA;

  }

  //esta funciones recorre el inicio del arreglo
  //de combinaciones y sus 3 operaciones
  correJson(json) {
    let line = json.num;
    if (json.opArr.length > 0) {
      for (let k = 0; k < 3; k++) {
        this.correJson2(line, json.opArr[k]);
      }
    }
  }

  //esta funcion entra en cada una delas ramificaciones
  //de las 3operaciones principales y reune todas las 
  //cominaciones posiblesen un nuevo array
  correJson2(line, json) {
    let esp = json.op == '' ? '' : ' ';
    let line1 = line + esp + json.op + esp + json.obj.num;
    if (json.obj.opArr.length > 0) {
      for (let k = 0; k < 3; k++) {
        this.correJson2(line1, json.obj.opArr[k]);
      }
    } else {
      this.combinaciones.push(line1.split(' '));
    }
  }

  //esta funcion lee el nuevo array de combinaciones
  //posibles y ejecuta las operaciones de esta forma
  //determinamos que combinacion coincide con la variable "numberSum"
  compComb(comb) {
    for (let x = 0; x < comb.length; x++) {
      let resp = 0;
      for (let y = 0; y < comb[x].length; y++) {
        let char = comb[x][y];
        if (char == '+') {
          let num = Number.parseInt(comb[x][y + 1]);
          resp = resp + num;
          y++;
        } else if (char == '-') {
          resp -= Number.parseInt(comb[x][y + 1]);
          y++;
        } else {
          resp = Number.parseInt(char);
        }
      }
      if (resp == this.numberSum) {
        let st = comb[x].join(' ') + ' = ' + resp;
        this.renderComb(st);
      }

    }
  }

  //esta funcion nos ayudaa renderizar las combinaciones
  //encontradas dentro de un div de respuesta
  renderComb(comb: string) {
    let div = this.r.createElement('div');
    let text = this.r.createText(comb);
    this.r.appendChild(div, text);
    this.r.appendChild(this.resp.nativeElement, div);
  }

}
