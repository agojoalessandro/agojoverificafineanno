import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { modello } from './driving.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Agojo-driving';
  myForm: FormGroup;
  arrayModelli: modello[];
  input: modello;
  constructor(fb:FormBuilder){
    this.arrayModelli=new Array();
    this.myForm = fb.group({
      'tipo': ['', Validators.required],
      'descrizione': ['', Validators.required],
      'tariffa': ['', Validators.required],
      'valutazionemedia': ['', Validators.required]
      
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){
      
      this.input = new modello();
      this.input.tipo = this.myForm.controls['tipo'].value;
      this.input.descrizione= this.myForm.controls['descrizione'].value;
      this.input.tariffa = this.myForm.controls['tariffa'].value;
      this.input.valutazionemedia = this.myForm.controls['valutazionemedia'].value;
      
      
      this.arrayModelli.push(this.input);
      
    }
  }
}
