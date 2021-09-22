import { randomPick, classNames } from './array';

describe('randomPick', () => {
  it("picks a random entry from an array", () => {
    const xs = [1,2,3];
    expect(xs).toContain(randomPick(xs));
  })
})

describe('classNames', () => {
  it("joins truthy strings", () => {
    const classes = ["red","blue"]
    expect(classNames(...classes)).toBe("red blue")
  })
})