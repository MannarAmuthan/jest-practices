import {add} from "../../../src/without-mock";

describe("Add", () => {
  it("Should add two numbers",()=>{
    let answer = add(5, 6);

    expect(answer).toBe(11);
  });

});
