import { call } from "../../../../src/module-mock/project";

jest.mock("../../../../src/module-mock/config");

describe("Project",()=>{

  it("should initiate",()=>{

     call("test_api");

  });
});