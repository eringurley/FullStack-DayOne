const createDog = (name, age, weight) => ({
  name, 
  age, 
  weight
});

const dog = createDog('spot', 5, '20lbs');
console.log(dog);

module.exports = createDog;
