let nomes = [], sexos = [], salarios = [];
let resultado = "Funcionárias (mulheres com salário > R$5000):\n";

for (let contador = 0; contador < 5; contador++) {
    nomes[contador] = prompt("Nome do " + (contador + 1) + "º funcionário:");
    sexos[contador] = prompt("Sexo (M/F):");
    salarios[contador] = prompt("Salário:");
    
    if (sexos[contador] === "F" && salarios[contador] > 5000) {
        resultado += "\n- " + nomes[contador] + ": R$ " + salarios[contador];
    }
}

alert(resultado);