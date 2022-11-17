// Questão 5
let nome = 'Wanderson Lucas Loiola Da Silva';
let x1 = nome.split(" ");

let iniciais = x1.reduce((acc, v) => acc + v[0], "");

document.write(iniciais);