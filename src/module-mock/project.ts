import {api_url, projectName} from "./config";


export const initiateProject=()=>{
  const project = projectName();
  const url=api_url();
  console.log(project,url);
}