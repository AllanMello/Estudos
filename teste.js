const readline = require("readline");

let biblioteca = ['detetive', 'cachorro', 'carro', 'computador', 'porta',
'tinta', 'hipopotamo', 'caderno', 'televisao', 'monitor']   

//Função para sortar os indices do array
/*let sortear = function() { for (let i = 0; i < biblioteca.length; i++) {
  const j = Math.floor(Math.random() * (i + 1));
  [biblioteca[i], biblioteca[j]] = [biblioteca[j], biblioteca[i]];
 }
}*/


let sortear = 'fannykita'

let palavraEscolhida = sortear.split("");
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

//let letrasDigitadas = [cl] Consegui extrair esse history a partir dessa variavel cl
let letrasDigitadas = [cl.history]
/*let conferir = function() {
  if (  letrasDigitadas ==  ) {
    console.log('Letra já digitada, tente novamente')
  }
} */


  console.log(`Suas letras digitadas foram: ${letrasDigitadas}`)
  console.log("Parabéns! Você acertou.");
  console.log(`A palavra era: ${palavraResposta}`)
  process.exit(0);
})();
