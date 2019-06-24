const createDog = require('./create-dog');

const args = process.argv;
const dog = createDog(name, age, weight);

const name = process.argv[0];
const age = process.argv[1];
const weight = process.argv[2];


console.log(process.argv);