import NewsCard from "./NewsCard";

function PopularSection({ news }) {
  return (
    <section className="popular">
      <h2>Berita Terpopuler</h2>

      <div className="popular-grid">
        {news.slice(1, 5).map((item, index) => (
          <NewsCard
            key={index}
            news={item}
            allNews={news}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularSection;