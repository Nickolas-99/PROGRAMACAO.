function verificar() {
    const pes = Number(document.getElementById('pes').value);
    const alt = Number(document.getElementById('alt').value);
    const imc = pes / (alt ** 2);

    const resultado = document.getElementById('Imc');
    
    if (pes <= 0 || alt <= 0) {
        resultado.innerHTML = `Por favor, insira valores válidos!`;
    }
    else if (imc <= 16) {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}, resultando assim em uma magreza grave. Procure um médico mais próximo.`;
    }
    else if (imc == 16 && imc < 17 ) {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}. Resultando assim em uma magreza moderada. Procure um médico mais próximo`;
    }
    else if (imc > 17 && imc < 18.5 ) {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}. Resultando assim em uma magreza leve. Procure um médico mais próximo.`;
    }
    else if (imc > 18.5 && imc <= 25) {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}. Parabéns você se encontra saudável!! Continue cuidando da sua saúde.`;
    }
    else if ( imc > 25 && imc < 30) {
        resultado.innerHTML = `O seu IMC é ${imc.toFixed(2)}. Resultando assim em um sobrepeso. Orientamos que procure um médico mais próximo.`;
    }

    else {
        resultado.innerHTML = `Por favor, insira valores válidos.`
    };
}

function limpar() {
    document.getElementById('pes').value = "";
    document.getElementById('alt').value = "";
    document.getElementById('Imc').innerHTML = 'O seu Imc é';
}