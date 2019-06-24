//import createDog from './index.js'
const createDog = require('./index');

//test suite
describe('dog create function', () => {
  //individual tests
  it('returns a dog object', () => {
    const dog = createDog('spot', 5, '20lbs');
    expect(dog).toEqual({
      name: 'spot',
      age: 5, 
      weight: '20lbs'
    });
  });
});
