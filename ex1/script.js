let idades = [];
let maiorIdade = 0;
let posicaoMaior = 0;

for (let contador = 0; contador < 4; contador++) {
    let idadeInformada = prompt("Digite a idade da " + (contador + 1) + "º pessoa:");
    idades[contador] = idadeInformada;

    if (contador === 0 || idadeInformada > maiorIdade) {
        maiorIdade = idadeInformada;
        posicaoMaior = contador; 
    }
}

alert("A maior idade digitada foi: " + maiorIdade + " anos.\n" +
    "Ela foi digitada na posição: " + posicaoMaior);