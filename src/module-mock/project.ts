import {api_url, get_secret, projectName} from "./config";


export const initiateProject=()=>{
  const project = projectName();
  const url=api_url();
  const secret_value=get_secret("secret_this","latest");
  console.log(project,url,secret_value);
}