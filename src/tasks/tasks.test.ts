import {sum, div, mult, sub, calculator} from './tasks';

// test('sum', () => {
// // 1.   Тестовые данные
//     const a: number = 10
//     const b: number = 5
//     //2. Выполнение тестируемого кода с тестовыми данными
//     const result = sum(a, b)
//     //3. Проверка ожидаемого результата
//     expect(result).toBe(15)
// })

test('sum', () => {
    expect(sum(10,5)).toBe(15)
})

// test('sub', () => {
// // 1.   Тестовые данные
//     const a: number = 10
//     const b: number = 5
//     //2. Выполнение тестируемого кода с тестовыми данными
//     const result = sub(a, b)
//     //3. Проверка ожидаемого результата
//     expect(result).toBe(5)
// })

test( 'sub', () => {
    expect(sub(10,5)).toBe(5)
})

// test('mult', () => {
// // 1.   Тестовые данные
//     const a: number = 10
//     const b: number = 5
//     //2. Выполнение тестируемого кода с тестовыми данными
//     const result = mult(a, b)
//     //3. Проверка ожидаемого результата
//     expect(result).toBe(50)
// })

test( 'mult', () => {
    expect(mult(10,5)).toBe(50)
})

// test('div', () => {
// // 1.   Тестовые данные
//     const a: number = 10
//     const b: number = 5
//     //2. Выполнение тестируемого кода с тестовыми данными
//     const result = div(a, b)
//     //3. Проверка ожидаемого результата
//     expect(result).toBe(2)
// })

test( 'div', () => {
    expect(div(10,5)).toBe(2)
})

test( 'calculator', () => {
    const  a: number = 10
    const  b: number = 5
    expect(calculator(a, b, {type: 'sum'})).toBe(15)
    expect(calculator(a, b, {type: 'div'})).toBe(2)
    expect(calculator(a, b, {type: 'mult'})).toBe(50)
    expect(calculator(a, b, {type: 'sub'})).toBe(5)

})
