import NewsCard from "./NewsCard";

function PopularSection({ news }) {
  return (
    <section className="popular">
      <h2>Berita Terpopuler</h2>

     <div className="popular-grid">
  {news.slice(1, 4).map((item, index) => (
    <div
      key={index}
      className="popular-item"
    >
      <div className="popular-rank">
        {index + 1}
      </div>

      <NewsCard
        news={item}
        allNews={news}
      />
    </div>
  ))}
</div>
    </section>
  );
}

export default PopularSection;