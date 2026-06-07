import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { getNews } from "../services/newsApi";
import PopularSection from "../components/PopularSection";
import RecommendationSection from "../components/RecommendationSection";
import Footer from "../components/Footer";
import BannerSection from "../components/BannerSection";

function Home() {
const [news, setNews] = useState([]);
const [category, setCategory] = useState("nasional");
  useEffect(() => {
  const fetchNews = async () => {
    const data = await getNews(category);
    setNews(data);
  };

  fetchNews();
}, [category]);

  return (
   <>
<Navbar
  category={category}
  setCategory={setCategory}
/>
  <HeroSection news={news[0]} />
  <PopularSection news={news} />
  <RecommendationSection news={news} />
   <BannerSection />
  <Footer />
</>
  );
}

export default Home;