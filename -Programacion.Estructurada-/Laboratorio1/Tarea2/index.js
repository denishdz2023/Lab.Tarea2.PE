//solicitamos cantidad de numeros que desea
let numeroDatos = Number(prompt("Ingrese cantidad de numeros que desea sumar"))
while (isNaN(numeroDatos) || numeroDatos=="" || numeroDatos<0) {
    alert("Ingrese comando  valido!")
    numeroDatos = Number(prompt("Ingrese cantidad de numeros que desea sumar"))
//aca almacenamos los numeros  
}
function datos (){
    const array = []
    for (let i = 0; i < numeroDatos; i++){
        let valor= Number(prompt("Ingrese numeros"))
    while (isNaN(valor) || valor=="") {
        alert("Valor invalido")    
        valor= Number(prompt("Ingrese numeros"))
    }    
        array.push(valor)
    }
    return array
}

const numeros = datos()

alert(numeros)
//aca realizamos el proceso
let suma = 0;

numeros.forEach(numero => {
     if (numero > 0) {
       suma += numero;
     }
   });

   alert(`La suma es:${suma}`)
