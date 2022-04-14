let numero = <HTMLInputElement> document.getElementById("numero");
let btnEnviar =<HTMLInputElement> document.getElementById("btnEnviar");
let resultado = <HTMLParagraphElement> document.getElementById("resultado");

let numeroIngresado : number ; 
let esValido : boolean ;
let esPar : boolean ;

btnEnviar.addEventListener("click",()=> {
  numeroIngresado = Number(numero.value);
  esValido = numeroIngresado >0;
  esPar = numeroIngresado % 2 == 0;

  if (esValido) {
    switch (esPar) {
      case true:
      console.log ("el numero" + numeroIngresado "esPar");

    }
  }

}