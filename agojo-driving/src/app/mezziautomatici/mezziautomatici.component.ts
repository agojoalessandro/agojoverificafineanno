import { Component, OnInit } from '@angular/core';
import { modello } from '../driving.model';
import { MODELLI } from '../mock-driving';

@Component({
    selector: 'app-mezziautomatici',
  templateUrl: './mezziautomatici.component.html',
  styleUrls: ['./mezziautomatici.component.css']
})

export class MezziautomaticiComponent implements OnInit {

  modelli = MODELLI;
  selectedModello: modello;

  constructor() { }

  ngOnInit() {
  }

  onSelect(modello: modello): void {
    this.selectedModello = modello;
  }
}