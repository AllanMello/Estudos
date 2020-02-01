const readline = require("readline");

let palavra = "casa";
let palavraEscolhida = palavra.split("");
let palavraResposta = [];
let contador = 0;

for (var i = 0; i < palavraEscolhida.length; i++) {
  palavraResposta[i] = "_";
}

var cl = readline.createInterface(process.stdin, process.stdout);
var question = function(q) {
  return new Promise((res, rej) => {
    cl.question(q, answer => {
      res(answer);
    });
  });
};

(async function main() {
  var answer;
  while (contador < palavraEscolhida.length) {
   // process.stdout.write("\033c");
   console.log('\033[2J\033[0f')
    console.log(palavraResposta);
    answer = await question("Digite uma letra e pressione <ENTER>: ");
    for (var i = 0; i < palavraEscolhida.length; i++) {
      if (answer == palavraEscolhida[i]) {
        palavraResposta[i] = `${answer}`;
        contador++;
      }
    }
    console.log(palavraResposta);
  }
  console.log("Parabéns! Você acertou.");
  process.exit(0);
})();
