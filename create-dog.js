const createDog = (name, age, weight) => ({
  name,
  age,
  weight
});

console.log(createDog('spot', 5, '20lbs'));


module.exports = createDog;
