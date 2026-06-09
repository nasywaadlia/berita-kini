import { Link } from "react-router-dom";

function PopularSection({ news }) {
  return (
    <section className="popular">
      <h2>Berita Terpopuler</h2>

      <div className="popular-grid">
        {news.slice(1, 4).map((item, index) => (
          <Link
            key={index}
            to="/news"
            state={{
              news: item,
              allNews: news,
            }}
            className="popular-link"
          >
            <div className="popular-item">

              <div className="popular-rank">
                {index + 1}
              </div>

              <img
                src={item.image.small}
                alt={item.title}
              />

              <div className="popular-content">
                <h4>{item.title}</h4>

                <div className="popular-meta">
                  <span className="category">
                    Nasional
                  </span>

                  <span>
                    • {item.isoDate.slice(0,10)}
                  </span>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularSection;