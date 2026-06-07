import { Link } from "react-router-dom";

function NewsCard({ news, allNews }) {
  return (
    <Link
      to="/news"
      state={{
        news,
        allNews
      }}
      style={{
        textDecoration: "none",
        color: "inherit"
      }}
    >
      <div className="news-card">
        <img
          src={news.image.small}
          alt={news.title}
        />

        <h4>{news.title}</h4>

<div className="card-meta">
  <span className="category">
    Nasional
  </span>

  <span>
    • {news.isoDate.slice(0,10)}
  </span>
</div>
      </div>
    </Link>
  );
}

export default NewsCard;