document.addEventListener('DOMContentLoaded', function() {
  const videoGames = {
      "1. Baldur's Gate 3": [{
          Number: "1",
          Year: "2023",
          Rating: "10",
          Genre: "RPG",
          ImageURL: "https://m.media-amazon.com/images/I/61pGHpNzNrL._SX385_.jpg",
          Description:"It's hard to pinpoint exactly what makes Baldur's Gate 3 so special, but to some extent that is what makes it so special. In its attempt to replicate the infinite imagination of Dungeons & Dragons, developer Larian Studios has pushed the concept of player freedom as far as possible, crafting a rewarding experience even for those who push the critical path to its limits. But technical excellence can only take you so far, and a world you can manipulate means little if there's no incentive to do so. Thankfully, Baldur's Gate 3 excels there too, with a world that begs you to explore, and characters that take you on their sprawling adventures, which in turn twist and adapt as you test the edges of your own story. There's nothing quite like it.",
      }],
      "2. Alan Wake 2": [{
          Number: "2",
          Year: "2023",
          Rating: "10",
          Genre: "Horror",
          Platform: "PC, Console",
          ImageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Alan_Wake_2_box_art.jpg/220px-Alan_Wake_2_box_art.jpg",
          Description:"",
      }],
      "3. The Legends of Zelda: Tears of the Kingdom": [{
          Number: "3",
          Year: "2023",
          Rating: "10",
          Genre: "RPG",
          Platform: "Nintendo Switch",
          ImageURL: "https://m.media-amazon.com/images/I/81o5QpJ7aVL._SL1500_.jpg",
          Description:"",
      }],
      "4. Marvel's Spider-Man 2": [{
          Number: "4",
          Year: "2023",
          Rating: "9",
          Genre: "Action-Adventure",
          ImageURL: "https://m.media-amazon.com/images/I/81VGpLvXQuL._SL1500_.jpg",
          Description:"",
      }],
      "5. Cocoon": [{
          Number: "5",
          Year: "2023",
          Rating: "9",
          Genre: "Puzzle-Platformer",
          Platform: "PC, Console",
          ImageURL: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0RYCeEza-yF5696O41kCKTtCkC3yrS_U7wD5gj-qcICkYT1g_",
          Description:"",
      }],
      "6. Resident Evil 4 Remake": [{
          Number: "6",
          Year: "2023",
          Rating: "9",
          Genre: "Horror",
          Platform: "PC, Console",
          ImageURL: "https://m.media-amazon.com/images/I/815o7ZcxpFL._AC_SL1500_.jpg",
          Description:"",
      }],
      "7. Super Mario Bros. Wonder": [{
          Number: "7",
          Year: "2023",
          Rating: "9",
          Genre: "Platformer",
          Platform: "PC, Console",
          ImageURL: "https://m.media-amazon.com/images/I/81kN3ZgSSGL._SL1500_.jpg",
          Description:"",
      }],
      "8. Star Wars Jedi: Survivor": [{
          Number: "8",
          Year: "2023",
          Rating: "8",
          Genre: "Action-Adventure",
          Platform: "PC, Console",
          ImageURL: "https://m.media-amazon.com/images/I/61LyJxQ7y5L._SL1264_.jpg",
          Description:"",
      }]
  };

  const cardContainer = document.getElementById('card-container');
    const template = document.getElementById('card-template').content;

    Object.keys(videoGames).forEach(gameTitle => {
        const game = videoGames[gameTitle][0];
        const clone = document.importNode(template, true);

        clone.querySelector('.game-title').textContent = gameTitle;
        clone.querySelector('.game-img').src = game.ImageURL;
        clone.querySelector('.game-img').alt = `${gameTitle} Poster`;
        clone.querySelector('.game-genre').textContent = `Genre: ${game.Genre}`;
        clone.querySelector('.game-year').textContent = `Year: ${game.Year}`;
        clone.querySelector('.game-rating').textContent = `Rating: ${game.Rating}/10`;

        if (game.Platform) {
            const platformElement = clone.querySelector('.game-platform');
            platformElement.textContent = `Platform: ${game.Platform}`;
            platformElement.style.display = "block";
        }

        // Make the card clickable for adding a description
        clone.querySelector('.card').addEventListener('click', function() {
            const description = prompt("Enter a description for " + gameTitle + ":");
            if (description) {
                this.querySelector('.game-description').textContent = description;
                this.querySelector('.game-description').style.display = 'block';
            }
        });

        cardContainer.appendChild(clone);
    });
});

function agreeOrDisagree() {
  const userResponse = prompt("Do you agree or disagree with this list? Type 'agree' or 'disagree'.");
  if (userResponse.toLowerCase() === 'agree') {
      randomizeCards();
  } else if (userResponse.toLowerCase() === 'disagree') {
      document.body.innerHTML = "<h1 style='color: red; text-align: center;'>Boohoo too bad :(</h1>";
  } else {
      alert("Please type 'agree' or 'disagree'.");
  }
}

function randomizeCards() {
  const cardContainer = document.getElementById('card-container');
  const cards = Array.from(cardContainer.children);
  for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap
  }
  cards.forEach(card => cardContainer.appendChild(card));
}

function removeLastCard() {
  const cardContainer = document.getElementById('card-container');
  if (cardContainer.lastElementChild) {
      cardContainer.removeChild(cardContainer.lastElementChild);
  }
}