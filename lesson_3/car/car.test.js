const Car = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
     // Setup.
     car = new Car();
  });

  afterEach(() => {
    // For tear down and clean-up.
  });

  test("has four wheels", () => {
    // execute code.
    //
    // assert de result.
    expect(car.wheels).toBe(4);
  });

  test("bad wheels", () => {
    expect(car.wheels).not.toBe(3);
  });

  test('two new cars are equal objects', () => {
    let car2 = new Car();

    expect(car).toEqual(car2);
    //expect(car).toBe(car2);
    expect(car).toStrictEqual(car2);
  });

  test('does not have doors', () => {
    expect(car.doors).toBeUndefined();
  });

  test('raises an error when called drive on it', () => {
    expect(() => car.drive()).toThrow(TypeError);
  });

  test('a new car has no mileage info', () => {
    expect(car.mileageInfo).toBeNull();
  });

  test('wheels is truthy', () => {
    expect(car.wheels).toBeTruthy();
  });

  test('array contains car', () => {
    let arr = [1, 2, 3];
    arr.push(car);

    expect(arr).toContain(car);
  });

  test('car has wheels', () => {
    expect(car.wheels).not.toBeUndefined();
  });
});

