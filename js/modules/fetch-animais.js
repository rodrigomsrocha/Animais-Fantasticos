import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo as informações
  // com o total de animais
  function createAnimal({ specie, total }) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
      <h3>${specie}</h3>
      <span data-numeros>${total}</span>
    `;
    return div;
  }

  // preeche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // anima os numeros
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numeros]",
      ".numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  // puxa as informações do arquivo json
  // e cria cada animal usando a função createAnimal
  async function criarAnimais() {
    try {
      // fetch do arquivo
      const animaisResponse = await fetch(url);
      // transforma a resposta em json
      const animaisJSON = await animaisResponse.json();

      // após a espera ativa as funções para preencher
      // e animar os numeros
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
