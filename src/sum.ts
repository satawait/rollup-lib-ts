export const sum = (a: number, b: number, ...c: number[]): number => {
    if (c.length) {
        return c.reduce((pre: number, next: number): number => pre + next, a + b)
    } else {
        return a + b
    }
}