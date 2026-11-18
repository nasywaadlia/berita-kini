export default async function handler(req, res) {
  const { kategori = "nasional" } = req.query;

  const kategoriValid = [
    "nasional",
    "internasional",
    "olahraga",
    "politik",
    "ekonomi",
    "teknologi",
    "hiburan",
    "gaya-hidup",
  ];

  if (!kategoriValid.includes(kategori)) {
    return res.status(400).json({
      message: "Kategori tidak valid",
    });
  }

  try {
    const response = await fetch(
      `https://berita-indo-api-next.vercel.app/api/cnn-news/${kategori}`
    );

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Gagal mengambil berita dari API",
      });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan server",
    });
  }
}