/* OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  
passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
passo 3 - fazer aparecer o próximo cartão da lista
passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  
passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
passo 3 - fazer aparecer o cartão anterior da lista
passo 4 - buscar o cartão que esta selecionado e esconder
*/

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao"); /*Vai buscar todos os seletores específicos | Para buscar uma classe utilizamos o ponto no início */

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1
    if (ehUltimoCartao) return; // Validação comparando os valores informados para que seja continuado o código abaixo ou não. Se não for satisfeito, o código é interropido e entra no return. 

    // passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();
    // passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionada nele
    
    // console.log(cartoes[1]); // Após inserir as informações na variável, será mostrado no console todas as informações referentes. 
    // console.log(cartoes[1].classList); // Será retornado a lista de classes referente ao item 1 do Array, entrando cada vez mais no diagrama de árvores (Conceito de Probabilidade e Estatística)
    // console.log(cartoes[1].classList.add("selecionado")); // Será adicionado na lista de classes do item 1 do Array o valor que está dentro do parêntese. 
    cartaoAtual++
    mostrarCartaoSelecionado(); // Usa o valor da variável para identificar a posição do Array e em seguida, adicionar a classe na lista do item desejado

});

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0
    if (ehPrimeiroCartao) return;
    // passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();
    // passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartaoSelecionado();
})
function mostrarCartaoSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado"); // Só funciona pq aqui só terá um item com a classe SELECIONADO
    cartaoSelecionado.classList.remove("selecionado");
}

