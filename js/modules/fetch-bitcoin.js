export default function initFetchBitcoin() {}

fetch("https://blockchain.info/ticker")
  .then((r) => r.json())
  .then((json) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);
  })
  .catch(() => {
    const btcLi = document.querySelector(".btc-li");
    btcLi.innerHTML =
      "Doe <span class='btc-preco'>bitcoins</span> para nos ajudar;";
  });
