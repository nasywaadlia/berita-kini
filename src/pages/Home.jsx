import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { getNews } from "../services/newsApi";
import PopularSection from "../components/PopularSection";
import RecommendationSection from "../components/RecommendationSection";
import Footer from "../components/Footer";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
   <>
  <Navbar />
  <HeroSection news={news[0]} />
  <PopularSection news={news} />
  <RecommendationSection news={news} />
  <Footer />
</>
  );
}

export default Home;