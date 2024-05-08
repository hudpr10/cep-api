import { switchEstado } from "./uf.js";

const campoTexto = document.querySelector('.campo-cep');
const legenda = document.querySelector('.legenda');
const lupa = document.querySelector('.lupa');

const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const ddd = document.querySelector('#ddd');

async function buscar(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro) {
            legenda.innerHTML = 'CEP não encontrado';
            cidade.innerHTML = "";
            estado.innerHTML = "";
            logradouro.innerHTML = "";
            bairro.innerHTML = "";
            ddd.innerHTML = "";
        } else {
            cidade.innerHTML = data.localidade;
            estado.innerHTML = `${switchEstado(data.uf)}, ${data.uf}`;
            if(data.logradouro === "") {
                logradouro.innerHTML = "Não encontrado"
                logradouro.style.color = "#EE4266"
            } else {
                logradouro.innerHTML = data.logradouro;
                logradouro.style.color = "#f4f4f4"
            }
            if(data.bairro === "") {
                bairro.innerHTML = "Não encontrado"
                bairro.style.color = "#EE4266"
            } else {
                bairro.innerHTML = data.bairro;
                bairro.style.color = "#f4f4f4"
            }
            ddd.innerHTML = data.ddd;
            legenda.innerHTML = "";
        }
    } catch (error) {
        console.error("Erro no cep digitado");
    } 
}

campoTexto.addEventListener("input", (e) => {
    for(let i = 0; i < 10; i++) {
        if(e.data == i) {
            if(campoTexto.value.length === 5) {
                campoTexto.value += "-";
            }
        } 
    } 
})

lupa.addEventListener("click", realizarBusca)
campoTexto.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        realizarBusca()
    }
});

function realizarBusca() {
    const cepLimpo = campoTexto.value.replace("-", "")

    if(cepLimpo.length < 8) {
        legenda.innerHTML = "Digite no mínimo 8 caracteres numéricos";
    } else {
        buscar(campoTexto.value);
    }
}