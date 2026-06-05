import axios from "axios";

const BASE_URL =
  "https://berita-indo-api-next.vercel.app/api";

export const getNews = async (category = "nasional") => {
  try {
    const response = await axios.get(
      `${BASE_URL}/cnn-news/${category}`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};