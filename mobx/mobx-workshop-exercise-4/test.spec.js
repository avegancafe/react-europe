import { types } from 'mobx-state-tree';

test('example test', () => {
    const numberType = types.number;
    expect(numberType.is(3)).toBe(true);
    expect(numberType.is('3')).toBe(false);
});

test('indexType is `false` or a positive number', () => {
    // TODO: fix: either a positive number or false
    const positiveNumberType = types.refinement(types.number, value => value >= 0);

    const indexType = types.union(types.literal(false), positiveNumberType);

    expect(indexType.is('false')).toBe(false);
    expect(indexType.is(false)).toBe(true);

    expect(indexType.is(true)).toBe(false);
    expect(indexType.is(3)).toBe(true);

    expect(indexType.is(0)).toBe(true);
    expect(indexType.is(-3)).toBe(false);
});

test('create range type', () => {
    const range = (x, y) => types.refinement(types.number, number => number >= x && number <= y);

    const Car = types.model('Car', {
        doors: range(2, 5),
        wheels: range(3, 5)
    });

    expect(
        Car.is({
            doors: 4,
            wheels: 4
        })
    ).toBeTruthy();
    expect(
        Car.is({
            doors: 1,
            wheels: 4
        })
    ).toBeFalsy();
    expect(
        Car.is({
            doors: 2,
            wheels: 5
        })
    ).toBeTruthy();
    expect(Car.is({})).toBeFalsy();
    expect(
        Car.is({
            doors: '4',
            wheels: '4'
        })
    ).toBeFalsy();
});

test('simple models', () => {
    const todo = types.model({
        title: types.string,
        done: types.boolean
    });

    expect(todo.is({})).toBeFalsy();
    expect(
        todo.is({
            title: 3,
            done: 'yes'
        })
    ).toBe(false);

    expect(
        todo.is({
            title: 'test',
            done: true
        })
    ).toBe(true);
});

test("'maybe' versus 'optional'", () => {
    const todo = types.model({
        title: types.maybe(types.string),
        done: types.optional(types.boolean, false)
    });

    expect(
        todo.is({
            title: null, // title can be null
            done: false
        })
    ).toBe(true);

    expect(
        todo.is({
            title: 'test'
            // done can be omitted
        })
    ).toBe(true);

    expect(
        todo.is({
            title: 'test',
            done: null // done cannot be null
        })
    ).toBe(false);
});

test('models with default values', () => {
    const todo = types.model({
        title: types.optional(types.string, 'test'),
        done: types.optional(types.boolean, false)
    });

    expect(todo.is({})).toBe(true);
    expect(todo.create()).toEqual({
        title: 'test',
        done: false
    });
});
