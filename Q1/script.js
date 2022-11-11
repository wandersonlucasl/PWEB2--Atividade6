// Questão 1
let numeros = [2, 3, 13, 7, 5];
let raizes = numeros.map(function(item){
    return Math.pow(item, 2);
});
document.write(numeros);
document.write("<br> Raizes " + raizes);
