import { initiateProject } from "../../../src/module-mock/project";


jest.mock("../../../src/module-mock/config",() => {
  return{
    projectName:()=>{
      return "mocked_project_name"
    },
    api_url:()=>{
      return "mocked_api_url"
    }
  }
});

describe("Project",()=>{

  it("should initiate",()=>{
    initiateProject();
  });
});