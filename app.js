const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    // EXCERSCISE 3 solution 
    difficulty:[
        {EX: "easy"},
        {EX: "med"},
        {EX: "hard"},
    ]
  }


  // EXERCISE 10
  game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);
  };
  
  // Example Pokémon object
  const pikachu = {
    name: "Pikachu",
    type: "Electric",
    level: 5,
  };
  
  // Calling the method to catch Pikachu
  game.catchPokemon(pikachu);
  
  console.log(game.party);

  const gyms = [
    { name: "Pewter Gym", difficulty: 3, completed: false },
    { name: "Cerulean Gym", difficulty: 2, completed: false },
    { name: "Vermilion Gym", difficulty: 4, completed: false },
    { name: "Celadon Gym", difficulty: 1, completed: false }
  ];
  
  // Loop through the array and update the 'completed' property
  gyms.forEach(gym => {
    if (gym.difficulty < 3) {
      gym.completed = true;
    }
  });
  
  // EXERCISE 12
  game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
      gym.complete = true;
    }
  });
  //EXECERCISE 13
  // Adding gymStatus method to the game object
game.gymStatus = function () {
  // Initialize the tally object
  const gymTally= { completed: 0, incomplete: 0 };

  // Iterate through gyms and update the tally
  this.gyms.forEach(gym => {
    if (gym.complete) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });

  // Log the tally
  console.log(gymTally);
};

// Call the method to check gym status
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.complete = true;
  }
});

console.log(game.gyms);

console.log(game);



  
/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


