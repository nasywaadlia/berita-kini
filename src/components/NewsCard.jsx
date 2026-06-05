function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img
        src={news.image.small}
        alt={news.title}
      />

      <h4>{news.title}</h4>

      <p>{news.isoDate.slice(0, 10)}</p>
    </div>
  );
}

export default NewsCard;