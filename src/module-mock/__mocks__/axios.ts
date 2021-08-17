
export const get=async (url: string) => {
  return {
    "data":"mocked_file_data_"+url
  };
}

const axios={
  get: get
}

export default axios;
