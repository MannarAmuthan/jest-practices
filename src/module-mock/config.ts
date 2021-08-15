
export const projectName=()=>{
  return process.env.PROJECT_NAME;
};

export const api_url=()=>{
  return process.env.URL;
}

export const get_secret=(secret_name: string,secret_version: string)=>{
  return secret_name+" "+secret_version;
};