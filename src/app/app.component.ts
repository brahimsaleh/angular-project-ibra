import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';



  name: string = 'jorge'
  age: number = 32
  friends: Array<string> = ["2", "3"];
  random: Array<any> = ["HOLA, true, 25"];

  resultado: number | string = '';
  data1: number = 0;
  data2: number = 0;

  ngOnInit(){
    this.executets();
  }

  public setData1(event: any) {

    this.data1 = Number(event.target.value)

  }
  public setData2(event: any) {

    this.data1 = Number(event.target.value)
  }



  public calculator(number1: number, number2: number, operation: string): number | any {
    switch (operation) {
      case '+':
        return this.resultado = number1 + number2;
      case '-':
        return this.resultado = number1 - number2;
      case '*':
        return this.resultado = number1 * number2;
      case '/':
        return this.resultado = number1 / number2;

      default:
        this

        break;


    }


    
  }
  
  executets() {
    const numero1: number = 1;
    const numero2: number = 2;

    const operadores: string[] = ["+", "-", "*", "/", "&&", "||", "===", "!=="];
    const comparacion: boolean = (1 === 1);
    const comparacion2: boolean = (numero1 === numero2);
    
    

    console.log("tiene que devolver: true",comparacion);
    console.log("tiene que devolver: false",comparacion2);

    console.log("tiene que devolver:true",numero1!==numero2);
    console.log("tiene que devolver:false",2!==numero2);


    console.log("operador:&&:true&&true",true&&true);
    console.log("operador:&&:true&&false",true&&false);
    console.log("operador:&&:false&&true",false&&true);
    console.log("operador:&&:false&&false",false&&false);

    console.log("operador:||:true||true",true||true);
    console.log("operador:||:true||false",true||false);
    console.log("operador:||:false||true",false||true);
    console.log("operador:||:false||false",false||false);

    console.log("pregunta1:devuelve true",(numero1!== 2)|| false);
    console.log("pregunta2:devuelve false",(numero1!== 1)|| false);
    console.log("pregunta3devuelve true",(numero1!== 1)|| true);
    console.log("pregunta4devuelve false",(numero1!== 2)&& false);

    let condicion: boolean = true;

    if (condicion){

      console.log("entramos en el if");

    }  else {
      console.log ("no entremos en el if")
    }
    
  }
} 