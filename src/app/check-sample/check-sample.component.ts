import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit,
  OnDestroy  
{
  quantidade: number = 0
  
  constructor() { }
 

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  //checked -> content -> view

  //após alguma alteração, verifica o view
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }

  //após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend")
  }

}
