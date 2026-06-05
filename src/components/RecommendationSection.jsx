import NewsCard from "./NewsCard";

function RecommendationSection({ news }) {
  return (
    <section className="recommendation">
      <h2>Rekomendasi Untuk Anda</h2>

      <div className="recommendation-grid">
        {news.slice(5, 13).map((item, index) => (
          <NewsCard
            key={index}
            news={item}
          />
        ))}
      </div>
    </section>
  );
}

export default RecommendationSection;