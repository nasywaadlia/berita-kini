import NewsCard from "./NewsCard";

function RecommendationSection({ news }) {
  return (
    <section className="recommendation">

  <div className="recommendation-header">
    <h2>Rekomendasi Untuk Anda</h2>

    <input
      type="text"
      placeholder="Cari berita..."
    />
  </div>

  <div className="recommendation-grid">
    {news.slice(5, 13).map((item, index) => (
      <NewsCard
        key={index}
        news={item}
        allNews={news}
      />
    ))}
  </div>

  <p className="result-info">
  Showing 1 to 10 of 97 results
</p>

  <div className="pagination">
    ...

  <button className="page-btn">
    ← Previous
  </button>

  <button className="active">
    1
  </button>

  <button>2</button>
  <button>3</button>

  <span>...</span>

  <button>8</button>
  <button>9</button>

  <button className="page-btn">
    Next →
  </button>

</div>
     
    </section>
  );
}

export default RecommendationSection;