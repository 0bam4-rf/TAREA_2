let nombre = prompt("INGRESE SU NOMBRE")
console.log("¡Hola " + [nombre] +"! Bienvenido al taller de JavaScript")

let edad = prompt("INGRESE SU EDAD")
const texto ="Tu edad es: "
console.log([texto] + [edad])

if (edad >= 18){
    alert("Usted es mayor de edad");
    } else{
        alert("Usted es menor de edad");
    }

alert("CALCULADORA")

let opcion = prompt("SELECIONE UNA OPERACION ESCRIBIENDO SU SIMBOLO: SUMA(+) RESTA(-) DIVISION (/) MULTIPLICACION (*)")
/* if (opcion == "+"){ */
/* let num1= parseInt(prompt("ingrese el primer numero a sumar")); */
/* let num2= parseInt(prompt("ingrese el segundo numero a sumar")); */
/* let suma= num1 + num2; */
/* alert("El resultado es: "+ suma) */
/* } */

switch (opcion) {
    case "+" :
        let num1= parseInt(prompt("ingrese el primer numero a sumar"));
        let num2= parseInt(prompt("ingrese el segundo numero a sumar"));
        let suma= num1 + num2;
        alert("El resultado es: "+ suma)
        break;
    case "-" :
        let res1= parseInt(prompt("ingrese el primer numero a restar"));
        let res2= parseInt(prompt("ingrese el segundo numero a restar"));
        let resta= res1 - res2;
        alert("El resultado es: "+ resta)
    case "/" :
        let div1= parseInt(prompt("ingrese el primer numero a dividir"));
        let div2= parseInt(prompt("ingrese el segundo numero a dividir"));
        let divi= div1 / div2;
        alert("El resultado es: "+ divi)
    case "*" :
        let mul1= parseInt(prompt("ingrese el primer numero a multiplicar"));
        let mul2= parseInt(prompt("ingrese el segundo numero a multiplicar"));
        let multi= mul1 * mul2;
        alert("El resultado es: "+ multi)    
    default:
        alert("SELECIONE UN VALOR CORRECTO")
        break;
}

let dato1 = parseInt(prompt("Ingrese un numero"));
let dato2 = parseInt(prompt("Ingrese otro nunmero"))

console.log(dato1>dato2)
console.log(dato1==dato2)
