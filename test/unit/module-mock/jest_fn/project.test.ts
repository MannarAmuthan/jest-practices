import { initiateProject } from "../../../../src/module-mock/project";

describe("Project",()=>{
  let mocked_get_secret=jest.fn();

  jest.mock("../../../../src/module-mock/config",() => {
    return{
      projectName:()=>{
        return "mocked_project_name"
      },
      api_url:()=>{
        return "mocked_api_url"
      },
      get_secret:mocked_get_secret
    }
  });

  it("should initiate",()=>{
    mocked_get_secret.mockImplementation((secret_name: string,secret_version: string)=>{
      return secret_name+" "+secret_version;
    });

    initiateProject();
  });
});