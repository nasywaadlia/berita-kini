
import axios from "axios";

const BASE_URL = "/api/berita";

export const getNews = async (category = "nasional") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        kategori: category,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Gagal mengambil berita:", error);
    return [];
  }
};
