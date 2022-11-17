// Questão 2
let numeros = [2, -3, 4, -5, 6, 8, -9];
let positivos = function (item){
    return item > 0;
}
let numerosPositivos = numeros.filter(positivos);

let somaPositivos = numerosPositivos.reduce((a, v) => a + v, 0);

document.write("Todos os Números " + numeros);
document.write("</br> Soma dos Positivos: " + somaPositivos);