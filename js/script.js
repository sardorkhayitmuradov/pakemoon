let elList = document.querySelector(".cards");

let heartIcon = "../images/heart.svg";

for (let pokemon of pokemons) {
  // Create
  let newCard = document.createElement("li");
  let newCardImg = document.createElement("img");
  let newCardLine = document.createElement("hr");
  let newCardInfo = document.createElement("div");
  let newCardData = document.createElement("div");
  let newCardTitle = document.createElement("h4");
  let newCardName = document.createElement("p");
  let newCardHeart = document.createElement("img");
  let newCardStatistics = document.createElement("div");
  let newCardWeight = document.createElement("p");
  let newCardHeight = document.createElement("p");

  //SET ATTRIBUTE
  newCard.setAttribute("class", "card__item");
  newCardImg.setAttribute("class", "character-img");
  newCardImg.setAttribute("src", pokemon.img);
  newCardLine.setAttribute("class", "hr");
  newCardInfo.setAttribute("class", "character-info");
  newCardData.setAttribute("class", "character-data");
  newCardTitle.setAttribute("class", "character-info__title");
  newCardName.setAttribute("class", "character-name");
  newCardHeart.setAttribute("src", heartIcon);
  newCardStatistics.setAttribute("class", "character-statistics");
  newCardWeight.setAttribute("class", "character-weight");
  newCardHeight.setAttribute("class", "character-height");

  //TEXT CONTENT
  newCardTitle.textContent = pokemon.name;
  newCardName.textContent = pokemon.type;
  newCardWeight.textContent = pokemon.weight;
  newCardHeight.textContent = pokemon.height;
  newCardHeart.textContent = heartIcon;

  //APPEND CHILD
  elList.appendChild(newCard);
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardLine);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(newCardData);
  newCardData.appendChild(newCardTitle);
  newCardData.appendChild(newCardName);
  newCardInfo.appendChild(newCardHeart);
  newCard.appendChild(newCardStatistics);
  newCardStatistics.appendChild(newCardWeight);
  newCardStatistics.appendChild(newCardHeight);
}
