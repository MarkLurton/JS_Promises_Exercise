// 1.
// numfact = async (num) => {
//   resp = await axios.get(`http://numbersapi.com/${num}?json`);
//   console.log(resp.data.text);
// };

// numfact(4);

// 2.
$numFacts = $(".num-facts");
batchNumFacts = async (num1, num2, num3) => {
  resp = await axios.get(`http://numbersapi.com/${num1},${num2},${num3}?json`);
  for (let fact in resp.data) {
    $numFacts.append(`<li>${resp.data[fact]}</li>`);
  }
};

batchNumFacts(4, 7, 24);

// 3.

numFacts4 = async (num) => {
  for (let i = 0; i < 4; i++) {
    resp = await axios.get(`http://numbersapi.com/${num}?json`);
    $numFacts.append(`<li>${resp.data.text}</li>`);
  }
};

numFacts4(4);

// Part 2 1.

getCard = async () => {
  resp = await axios.get("http://deckofcardsapi.com/api/deck/new/draw");
  console.log(resp);
  console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`);
};

getCard();

// 2.

getTwoCards = async () => {
  cards = [];
  resp = await axios.get("http://deckofcardsapi.com/api/deck/new/draw");
  deckId = resp.data.deck_id;
  cards.push({
    value: resp.data.cards[0].value,
    suit: resp.data.cards[0].suit,
  });
  resp = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw`);
  cards.push({
    value: resp.data.cards[0].value,
    suit: resp.data.cards[0].suit,
  });
  for (card of cards) {
    console.log(`${card.value} of ${card.suit}`);
  }
};

getTwoCards();
// 3.
$newCard = $(".new-card");
$cards = $(".cards");

let deckId = "new";

$newCard.on("click", async () => {
  console.log("hello");
  console.log($cards.length);
  $cards.empty();

  resp = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw`);
  deckId = resp.data.deck_id;
  $cards.append(`<img src=${resp.data.cards[0].image}>`);
});
