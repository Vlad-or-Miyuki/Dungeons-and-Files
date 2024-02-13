const readlineSync = require('readline-sync');

let characteristics = {
  strength: 8,
  constitution: 8,
  dexterity: 8,
  wisdom: 8,
  intelligence: 8,
  charisma: 8
};

let remainingPoints = 25;

const calculateCostForAttribute = (value) => {
  if (value < 13) {
    return 1;
  } else if (value < 15) {
    return 2;
  } else {
    return "MAX";
  }
};

const printCharacteristics = () => {
  console.log("Текущие характеристики:");
  for (let key in characteristics) {
    console.log(`${key} : ${characteristics[key]}`);
  }
  console.log("Оставшиеся очки:", remainingPoints);
};

const distributePointsDnD = () => {
  printCharacteristics();

  while (remainingPoints > 0) {
    let skill = readlineSync.question('Выберите характеристику (strength, constitution, dexterity, wisdom, intelligence, charisma): ');
    let points = parseInt(readlineSync.question('Введите количество очков для этой характеристики: '));

    let cost = calculateCostForAttribute(characteristics[skill]);

    if (points < cost || isNaN(points) || points > remainingPoints || cost === "MAX") {
      console.log("Некорректное количество очков.");
      continue;
    }

    if (remainingPoints - (cost * points) < 0) {
      console.log("Недостаточно очков.");
      continue;
    }

    if (skill in characteristics) {
      let totalCost = cost * points;
      if (cost === 1 && characteristics[skill] + points > 13) {
        console.log("Сначала вам необходимо прокачать навык до 13 уровня.");
        continue;
      } else if (cost === 2 && characteristics[skill] + points > 15) {
        console.log("Максимальное значение характеристики 15.");
        continue;
      }
      remainingPoints -= totalCost;
      characteristics[skill] += points;
      printCharacteristics();
    } else {
      console.log('Некорректная характеристика.');
    }
  }

  console.log("Итоговые характеристики:");
  for (let key in characteristics) {
    console.log(`${key} : ${characteristics[key]}`);
  }
};

// Пример использованияя
distributePointsDnD();