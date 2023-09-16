const sumTesting = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sumTesting(1, 2)).toEqual(3);
});
