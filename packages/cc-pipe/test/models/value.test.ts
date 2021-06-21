
import { Name } from "../../src/models/value"

describe("Name", () => {
  it("is", () => {
    const aName = Name("ABK");
    expect(aName).toEqual("ABK")
  })
})