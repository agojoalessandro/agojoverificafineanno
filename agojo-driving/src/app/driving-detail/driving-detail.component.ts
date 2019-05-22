import { Component, OnInit, Input } from '@angular/core';
import { modello} from '../driving.model';

@Component({
  selector: 'app-driving-detail',
  templateUrl: './driving-detail.component.html',
  styleUrls: ['./driving-detail.component.css']
})
export class DrivingDetailComponent implements OnInit {

  modello = modello;
  selectedModello: modello;
  
  constructor() { }

  ngOnInit() {
  }
 onSelect(modello: modello): void {
    this.selectedModello = modello;
  }
}
