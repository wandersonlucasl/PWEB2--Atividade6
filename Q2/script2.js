// Questão 2
let numeros = [2, 4, 6, -5, 8, -9];
let soma = numeros.map(function(soma, item){
    if (item >= 0)
        return soma + item;
});
document.write(soma);