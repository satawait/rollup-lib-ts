import { sum } from './sum'
export const sumPrintFunc = (a: number, b: number, ...c: number[]): string => {
    const testVar = 22
    return `计算结果是${sum(a, b, ...c)}`
}
console.log(sumPrintFunc(1, 2, 3))