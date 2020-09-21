function studentHogwarts() {
  privateScore = 0;
  name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return `${name}: ${privateScore}`;
    }
  };
}

let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

console.log(harry.getScore());

let draco = new studentHogwarts();
harry.setName("Draco");
harry.rewardStudent();
harry.penalizeStudent();
harry.penalizeStudent();
harry.penalizeStudent();

console.log(harry.getScore());
