const { getState, updateState } = require('./store');

describe('getState', () => {
  it('returns a state', ()  => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });

  it('can updateState', () => {
    updateState('shirts', 100); 
    const state = getState();
    expect(state).toEqual({
      shirts: 100,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});



