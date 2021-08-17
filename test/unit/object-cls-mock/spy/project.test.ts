import {table} from "../../../../src/object-cls-mock/table";
import {readFromTable} from "../../../../src/object-cls-mock/table_reader";

describe("Project",()=>{

  jest.spyOn(table,"read").mockImplementation(()=>{
    return "mocked_text";
  })

  it("should initiate",()=>{

    readFromTable();

  });
});