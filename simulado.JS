function imc(peso, altura) {
  return peso / (altura * altura);
}

function tiposimc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso normal";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Excesso de peso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade classe 1";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade classe 2";
  } else {
    return "Obesidade classe 3";
  }
}

for (var i = 0; i < 10; i++) {
  var peso = parseFloat(prompt("Digite o seu peso (Kg): "));
  if (peso === null || isNaN(peso)) {
    console.log("Terminando o programa");
    break;
  }

  var altura = parseFloat(prompt("Digite sua altura (Ex:1,60): "));
  if (altura === null || isNaN(altura)) {
    console.log("Terminando o programa");
    break;
  }

  var calculoIMC = imc(peso, altura);
  var tipos = tiposimc(calculoIMC);

  console.log(
    `Pessoa ${i + 1}: IMC = ${calculoIMC.toFixed(2)}, Classificação = ${tipos}`
  );
}

