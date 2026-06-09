let nomes = [], alturas = [];
let continuar = true, contador = 0; 

while (continuar) {
    nomes[contador] = prompt("Digite o nome da " + (contador + 1) + "ª pessoa:");
    alturas[contador] = prompt("Digite a altura de " + nomes[contador] + " (ex: 1.75):");
    
    continuar = confirm("Deseja cadastrar mais alguém?");
    if (continuar) contador++; 
}

let maiorAlt = alturas[0], menorAlt = alturas[0];
let nomeMaior = nomes[0], nomeMenor = nomes[0];

for (let j = 1; j <= contador; j++) {
    if (alturas[j] > maiorAlt) {
        maiorAlt = alturas[j];
        nomeMaior = nomes[j];
    }
    if (alturas[j] < menorAlt) {
        menorAlt = alturas[j];
        nomeMenor = nomes[j];
    }
}

alert("Maior altura: " + maiorAlt + "m (" + nomeMaior + ")\n" +
    "Menor altura: " + menorAlt + "m (" + nomeMenor + ")");