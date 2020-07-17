import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'x-component',
  templateUrl: './x-component.component.html',
  styleUrls: ['./x-component.component.css']
})
export class XComponentComponent implements OnInit {

  public n: number;
  public x: string;
  @ViewChild('x', { static: true }) divX: ElementRef;

  constructor(private r: Renderer2) {
    this.x = '';
  }

  dibujar(num: number) {
    this.divX.nativeElement.innerHTML = "";
    if (num > 0) {
      this.n = num;
      for (let i = 0; i < this.n; i++) {
        let filaD = this.r.createElement('div');
        let fila = [];
        for (let j = 0; j < this.n; j++) {
          fila.push('_');
        }
        fila[i] = 'X';
        fila[(fila.length - 1) - i] = 'X';
        let texto = this.r.createText(fila.join(""));
        this.r.appendChild(filaD, texto);
        this.r.appendChild(this.divX.nativeElement, filaD);
      }
    } else {
      this.divX.nativeElement.innerHTML = "Error";
    }

  }

  ngOnInit(): void {

  }

}
