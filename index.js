function createDog(name, age, weight) {
    return {
        name, 
        age, 
        weight
    };
}

const dog = createDog('spot', 5, '20lbs'); 

console.log(dog);

// best way: 
// const createDog = (name, age, weight) => ({
//   name, 
//   age, 
//   weight
// });
// const dog = createDog('spot', 5, '20lbs'); 

// console.log(dog);