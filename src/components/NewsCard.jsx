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

        <p>{news.isoDate.slice(0, 10)}</p>
      </div>
    </Link>
  );
}

export default NewsCard;