import { getArray } from "./index";

test('advanced', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
    expect(getArray(obj, ["name", "attack"])).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
        { key: 'level', value: 2 }
      ])

    expect(getArray({name: 'мечник', health: 10, level: 2}, ['level'])).toEqual([ { key: 'level', value: 2 },  { key: 'health', value: 10 }, { key: 'name', value: 'мечник' },])
    expect(getArray({name: 'мечник', health: 10, level: 2})).toEqual({name: 'мечник', health: 10, level: 2})
    expect(getArray()).toEqual()

})