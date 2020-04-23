import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

interface FiltroUsuario {
	id:number,
	nombre:string,
  etiqueta:string,
	valor:number,
	filtros:Array<FiltroUsuario>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MultiSelectsApp';

  public formGroup: FormGroup;

  public filtrosUsuario:Array<FiltroUsuario>;

  constructor(private formBuilder:FormBuilder){
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit(){
  	let filtro1:FiltroUsuario = {id:1,nombre:"Filtro Uno",etiqueta:"uno",valor:100,filtros:null};
  	let filtro2:FiltroUsuario = {id:2,nombre:"Filtro Dos",etiqueta:"dos",valor:200,filtros:null};
  	let filtro3:FiltroUsuario = {id:3,nombre:"Filtro Tres",etiqueta:"tres",valor:300,filtros:null};

  	let filtros = new Array<FiltroUsuario>();
  	filtros.push(filtro1);
  	filtros.push(filtro2);
  	filtros.push(filtro3);

  	let filtros2 = new Array<FiltroUsuario>();
  	filtros2.push(filtro1);
  	filtros2.push(filtro2);

  	this.filtrosUsuario = new Array<FiltroUsuario>();
  	this.filtrosUsuario.push({id:1,nombre:"Opciones 1",etiqueta:"select1",valor:1,filtros:filtros});
  	this.filtrosUsuario.push({id:2,nombre:"Opciones 2",etiqueta:"select2",valor:2,filtros:filtros2});

    for (var i = 0;i<this.filtrosUsuario.length; i++) {
      let item = this.filtrosUsuario[i];
      this.formGroup.addControl(item.etiqueta, new FormControl('', Validators.compose([Validators.required])));
    }

  }

  public onSubmit(values:any):void {
    console.log('onSubmit();');
    alert("Revisar consola");
    console.log(values);
  }

}