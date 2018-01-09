/*
Heroes Fighting
1. Написать базовый класс Hero который принимает параметрами конструктора имя героя и количество жизни
(значение по умолчанию 150). Класс героя должен содержать методы shot(otherHero) и kick(otherHero) которые наносят
повреждения другому герою (otherHero). Метод shot должен наносить 15 очков повреждений, метод kick - 5. Также класс
должен иметь метод getLifeValue() , возвращающий количество жизни героя. Написать дочерний класс SuperHero,
с усиленными повреждениями. Метод shot супер-героя должен наносить 25 очков повреждений, kick - 10.

2. Создать консольную игру для двух игроков, управление которой идет с клавиатуры, n - новая игра (создаются два героя,
случайным образом определяется тип героя и количество жизни (от 100 до 150), то есть в игре могут быть hero-hero,
hero-superhero, superhero-superhero с разными количествами жизни). Первый герой играет кнопками q, w, второй o, p,
(соответственно kick и shot). В консоли должен вестись лог игры, на каждое повреждение выводить строку ${Имя героя}
${тип повреждения shot/kick} -${количество повреждений} from ${Имя поврежденного героя}
rest ${остаток жизни поврежденного героя}. При достижении 0 жизней каким либо из героев, вывести сообщение кто выиграл
и сколько жизней у него осталось.
 */

let fight = 0;
let fighter1, fighter2;

class Hero {
    constructor(name, hp = 150) {
        this.name = name;
        this.hp = hp;
        this.varShot = 15;
        this.varKick = 5;
    }


    shot(otherHero) {
        otherHero = otherHero - this.varShot;
        return otherHero;
    }

    kick(otherHero) {
        otherHero = otherHero - this.varKick;
        return otherHero;
    }

    getLifeValue() {
        return this.hp;
    }
}

class SuperHero extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.varShot = 25;
        this.varKick = 10;
    }
}

function help() {
    console.log('   "N" - new game, "Z" - exit\nFighter 1: "Q" - kick, "W" - shot\nFighter 2: "Q" - kick, "W" - shot');

}

function start() {
    if (fight === 0) {
        console.log('--= Let\'s Party, press "N" =--');
    } else {
        help();
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomHero(name) {
    if (getRandom(0, 1)) {
        return new Hero(name, getRandom(100, 150));
    } else {
        return new SuperHero(name, getRandom(100, 150));
    }
}

function newGame() {
    if (fight === 0) {
        fight = 1;
        fighter1 = randomHero('FIGHTER_1');
        fighter2 = randomHero('FIGHTER_2');
        console.log('          -=FIGHT=-');
    }
}

function actionFighter(action, attack, victim) {
    if (fight === 1) {
        let damage;
        if (action === 'kick') {
            victim.hp = attack.kick(victim.hp);
            damage = attack.varKick;
        }
        if (action === 'shot') {
            victim.hp = attack.shot(victim.hp);
            damage = attack.varShot;
        }
        if (victim.getLifeValue() >= 0) {
            console.log(`${victim.name} got ${action} -${damage} from ${attack.name}, rest life ${victim.getLifeValue()}`);
        } else {
            console.log(`${victim.name} die, ${attack.name} hp = ${attack.getLifeValue()}`);
            console.log('          -=GAME OVER=-');
            fight = 0;
        }
    } else {
        start();
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
        case 'N':
            newGame();
            break;
        case 'q': // fighter1 kick
        case 'Q':
            actionFighter('kick', fighter1, fighter2);
            break;
        case 'w': // fighter1 shot
        case 'W':
            actionFighter('shot', fighter1, fighter2);
            break;
        case 'o': // fighter2 kick
        case 'O':
            actionFighter('kick', fighter2, fighter1);
            break;
        case 'p': //// fighter2 shot
        case 'P':
            actionFighter('shot', fighter2, fighter1);
            break;
        case 'z':
        case 'Z':
            process.exit(0);
            break;
        default:
            start();
    }
});
console.log('\033c');
console.log('    --=Welcome to the Game=--');
help();