let projeto = "Desafio Classificador de nivel de Heroi ";

console.log("Bem vindo ao " + projeto);

let nomeJogador = "Rafael";
let nivelGame = 10050;

if (nivelGame === 1000) {
  console.log("Parabens, voce e um Heroi de Ferro !");
} else if (nivelGame >= 1001 && nivelGame <= 2000) {
  console.log("Parabens, voce e um Heroi Bronze");
} else if (nivelGame >= 2001 && nivelGame <= 5000) {
  console.log("Parabens, voce e um Heroi Prata");
}else if (nivelGame >= 5001 && nivelGame <= 7000) {
  console.log("Parabens, voce e um Heroi Ouro");
}else if (nivelGame >= 7001 && nivelGame <= 8000) {
  console.log("Parabens, voce e um Heroi Platina");
}else if (nivelGame >= 8001 && nivelGame <= 9000) {
  console.log("Parabens, voce e um Heroi Ancesdente");
}else if (nivelGame >= 9001 && nivelGame <= 10000) {
  console.log("Parabens, voce e um Heroi Imortal");
}else if (nivelGame >= 10001) {
  console.log("Parabens, voce e um Heroi Radiante");
}

console.log("O Heroi de nome " + nomeJogador + " esta no nivel " + nivelGame);