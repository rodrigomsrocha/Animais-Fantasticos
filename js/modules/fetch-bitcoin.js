export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);
    })
    .catch(() => {
      const btcLi = document.querySelector(".btc-li");
      btcLi.innerHTML =
        "Doe <span class='btc-preco'>bitcoins</span> para nos ajudar;";
    });
}
