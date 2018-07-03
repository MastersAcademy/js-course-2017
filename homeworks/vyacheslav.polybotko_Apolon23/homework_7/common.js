let playerOne = 0;
let playerTwo = 0;
class Hero {
  constructor(name, health = 150) {
    this.name = name;
    this.health = health;
    this.shot = 15;
    this.kick = 5;
  }
  shotAttack(otherHero) {
    otherHero.health -= this.shot;
  }
  kickAttack(otherHero) {
    otherHero.health -= this.kick;
  }
  getLifeValue() {
    return this.health;
  }
}

class SuperHero extends Hero {
  constructor(name, health) {
    super(name, health);
    this.shot = 25;
    this.kick = 10;
  }
  shotAttack(otherHero) {
    otherHero.health -= this.shot;
  }
  kickAttack(otherHero) {
    otherHero.health -= this.kick;
  }
}

function startGame() {
  let checkRandom1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  let checkRandom2 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

  if (checkRandom1 === 1) {
    playerOne = new Hero('Hero', Math.floor(Math.random() * (150 - 100 + 1)) + 100);
  } else {
    playerOne = new SuperHero('SuperHero', Math.floor(Math.random() * (150 - 120 + 1)) + 120);
  }

  if (checkRandom2 === 1) {
    playerTwo = new Hero('Hero', Math.floor(Math.random() * (150 - 100 + 1)) + 100);
  } else {
    playerTwo = new SuperHero('SuperHero', Math.floor(Math.random() * (150 - 120 + 1)) + 120);
  }
}

function finishGame() {
  if (playerOne.health <= 0) {
    console.log(`Won player 2 with name "${playerTwo.name}" and lives he has left ${playerTwo.getLifeValue()}`);
    process.exit(0);
  } else if (playerTwo.health <= 0) {
    console.log(`Won player 1 with name "${playerOne.name}" and lives he has left ${playerOne.getLifeValue()}`);
    process.exit(0);
  }
}

process.stdin.setRawMode(true);
process.stdin.on('readable', () => {
  const key = process.stdin.read();
  if (!key) return;
  const str = String(key);

  switch (str) {
    case 'null':
      break;
    case 'n':
      startGame();
      break;
    case 'q':
      playerOne.kickAttack(playerTwo);
      console.log(`${playerOne.name} kick on ${playerOne.kick} damage ${playerTwo.name} left ${playerTwo.getLifeValue()}`);
      finishGame();
      break;
    case 'w':
      playerOne.shotAttack(playerTwo);
      console.log(`${playerOne.name} shot on ${playerOne.shot} damage ${playerTwo.name} left ${playerTwo.getLifeValue()}`);
      finishGame();
      break;
    case 'o':
      playerTwo.kickAttack(playerOne);
      console.log(`${playerTwo.name} kick on ${playerTwo.kick} damage ${playerOne.name} left ${playerOne.getLifeValue()}`);
      finishGame();
      break;
    case 'p':
      playerTwo.shotAttack(playerOne);
      console.log(`${playerTwo.name} shot on ${playerTwo.shot} damage ${playerOne.name} left ${playerOne.getLifeValue()}`);
      finishGame();
      break;
    case 'z':
      process.exit(0);
    default:
      console.log(str);
  }
});

console.log('Welcome to the game, press - n for start new game\n\tpress - z to quit the game');

console.log('Controls for first player:\n q - kick\n w - shot\n second player:\n o - kick\n p - shot');