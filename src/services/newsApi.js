import axios from "axios";

const BASE_URL =
  "https://berita-indo-api-next.vercel.app/api";

export const getNews = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/cnn-news/nasional`
    );

    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};