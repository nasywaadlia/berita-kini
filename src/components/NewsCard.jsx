import { Link } from "react-router-dom";

function NewsCard({ news }) {
  return (
    <Link
      to="/news"
      state={{ news }}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className="news-card">
        <img
          src={news.image.small}
          alt={news.title}
        />

      <h4>{news.title}</h4>

<p className="snippet">
  {news.contentSnippet}
</p>

<p>{news.isoDate.slice(0, 10)}</p>
      </div>
    </Link>
  );
}

export default NewsCard;