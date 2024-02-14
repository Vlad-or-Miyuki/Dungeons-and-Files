let character = {
  maxHealthPoints: 100,
  healthPoints: 100,
  manaPoints: 50,
  takeDamage: (damage) => {
    character.healthPoints -= damage;
    if (character.healthPoints <= 0) {
      console.log("Character has died!");
      character.healthPoints = 0;
    }
  },
  heal: (amount) => {
    character.healthPoints += amount;
    if (character.healthPoints > character.maxHealthPoints) {
      character.healthPoints = character.maxHealthPoints;
    }
  }
};

// Нанесение урона
character.takeDamage(99); // Персонаж получает урон
console.log("Health Points: " + character.healthPoints);
console.log("Mana Points: " + character.manaPoints);

// Лечение
character.heal(10); // Попытка излечить персонажа
console.log("Health Points: " + character.healthPoints); // Значение не изменится, если персонаж мертв

  