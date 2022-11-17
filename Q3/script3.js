// QUestão 3
let numeros = [5, 30, 15, 10, 25, 20, 35]

let numeros2 = numeros.sort((n1, n2) => n2 - n1);

let numerosDecrescente = numeros2.join(", ");

document.write(numerosDecrescente);