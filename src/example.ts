export const sumPositiveNumbers = (a: number, b: number) => {
  if (a < 0 || b < 0) throw new Error('One of the numbers is negative')

  return a + b
}
