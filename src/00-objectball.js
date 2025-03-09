function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// function to return number of points scored

function numPointsScored(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName].points;
    }
  }
}

// function to return shoesize of player

function shoeSize(playerName) {
  for (const team of Object.values(gameObject())) {
    if (team.players[playerName]) {
      return team.players[playerName].shoe;
    }
  }
}

// function to return team colors

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null;
}

// function to return team names

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// function to return player numbers

function playerNumbers(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return Object.values(game[team].players).map((player) => player.number);
    }
  }
  return null;
}

// function to return players stat

function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
  return null;
}

//function to return  rebound associated with the largest shoe size

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].shoe > largestShoe) {
        largestShoe = game[team].players[player].shoe;
        rebounds = game[team].players[player].rebounds;
      }
    }
  }
  return rebounds;
}

//Bonus Questions

// function to return the player with most points

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].points > maxPoints) {
        maxPoints = game[team].players[player].points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

// function to return the winning team

function winningTeam() {
  let game = gameObject();
  let scores = { home: 0, away: 0 };

  for (let team in game) {
    scores[team] = Object.values(game[team].players).reduce(
      (acc, player) => acc + player.points,
      0
    );
  }
  return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}

// function to return player with longest name

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

// superbonus question

// function to return player with longest name had the most steals

function doesLongNameStealATon() {
  let longestName = playerWithLongestName();
  let game = gameObject();
  let maxSteals = 0;
  let mostStealsPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (game[team].players[player].steals > maxSteals) {
        maxSteals = game[team].players[player].steals;
        mostStealsPlayer = player;
      }
    }
  }
  return longestName === mostStealsPlayer;
}

// test functions
console.log(gameObject()); // building object
console.log(numPointsScored("Ben Gordon")); // testing for  number of points scored
console.log(shoeSize("Brook Lopez")); // testing for shoesize of player
console.log(teamColors("Brooklyn Nets")); // testing for team colors
console.log(teamNames()); // testing for teamnames
console.log(playerNumbers("Charlotte Hornets")); // testing for player numbers
console.log(playerStats("Mason Plumlee")); // testing for player stats
console.log(bigShoeRebounds()); // testing for the number of rebounds with the player that has largest shoesize
console.log(mostPointsScored()); // testing for player with most points
console.log(winningTeam()); // testing for team with the most points
console.log(playerWithLongestName()); // testing for player with the longest name
console.log(doesLongNameStealATon()); // testing to see if its that the player with the longest name has the most steals
