//Dom
const nome = document.querySelector("#nome");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const resultado = document.querySelector("#resultado");
const btCalcular = document.querySelector("#butao");    

//Eventos
btCalcular.addEventListener("click", calcularIMC);

//funções
function calcularIMC() {
    if (nome.value === "" || peso.value === "" || altura.value === "") {
        alert("Preencha todos os campos!");
        return;
    }
    const imc = peso.value / (altura.value * altura.value);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }   
    resultado.innerHTML = `Olá ${nome.value}, seu IMC é ${imc.toFixed(1)} e você está classificado como ${classificacao}.`;
    resultado.style.display = "block";
}
