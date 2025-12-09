import axios from "axios";

export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGFILE_APIKEY}`,
    formData
  );
  //   console.log(data.data.display_url);
  //   const imgURL = data?.data?.display_url;
  //   console.log(imgURL);
  return data?.data?.display_url;
};
