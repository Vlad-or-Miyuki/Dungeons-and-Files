let character = {
    maxHealthPoints: 100,
    healthPoints: 100,
    manaPoints: 50,
    takeDamage: function(damage) {
      this.healthPoints -= damage;
      if (this.healthPoints <= 0) {
        console.log("Character has died!");
        this.healthPoints = 0;
      }
    },
    heal: function(amount) {
      this.healthPoints += amount;
      if (this.healthPoints > this.maxHealthPoints) {
        this.healthPoints = this.maxHealthPoints;
      }
    }
  };
  
  // Нанесение урона
  character.takeDamage(99); // Персонаж умирает
  console.log("Health Points: " + character.healthPoints);
  console.log("Mana Points: " + character.manaPoints);
  
  // Лечение
  character.heal(50); // Попытка излечить персонажа
  console.log("Health Points: " + character.healthPoints); // Значение не изменится, так как персонаж мертв
  