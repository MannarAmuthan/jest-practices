import {get_secret} from "../../../../src/module-mock/config";
import { initiateProject } from "../../../../src/module-mock/project";

jest.mock("../../../../src/module-mock/config")

describe("Project",()=>{

  it("should initiate",()=>{

    (get_secret as jest.MockedFunction<typeof get_secret>)
      .mockReturnValue("mocked_secret_value");

    initiateProject();

    expect(get_secret).toHaveBeenCalledWith("secret_this", "latest");
  });
});