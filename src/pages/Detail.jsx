import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Detail() {
  const location = useLocation();

  const news = location.state?.news;
  const allNews = location.state?.allNews || [];

  if (!news) {
    return <h2>Berita tidak ditemukan</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="detail-container">

        <div className="breadcrumb">
          Home &gt; Nasional &gt; Detail
        </div>

        <div className="detail-layout">

          <div className="detail-content">

            <h1>{news.title}</h1>

            <p className="date">
              {news.isoDate.slice(0,10)}
            </p>

            <img
              src={news.image.large}
              alt={news.title}
            />

           <p>{news.contentSnippet}</p>

<p>
  Berita ini menjadi perhatian publik dan terus
  berkembang seiring dengan informasi terbaru
  yang disampaikan oleh berbagai pihak terkait.
</p>

<p>
  Masyarakat diimbau untuk mengikuti perkembangan
  berita melalui sumber resmi agar memperoleh
  informasi yang akurat dan terpercaya.
</p>

           <a
  href={news.link}
  target="_blank"
  rel="noreferrer"
>
  Baca sumber asli →
</a>
<section className="comment-section">
  <h2>Komentar</h2>

  <div className="comment-form">
    <input
      type="text"
      placeholder="Nama Anda"
    />

    <textarea
      placeholder="Tulis komentar..."
    ></textarea>

    <button>Kirim Komentar</button>
  </div>

  <div className="comment-list">

    <div className="comment-item">

 <div className="comment-avatar"></div>

  <div className="comment-content">
    <h4>Budi Santoso</h4>

 <span className="comment-date">
    5 Juni 2026
  </span>

    <p>
      Informasinya sangat membantu dan mudah dipahami.
    </p>
  </div>

</div>

<div className="comment-item">
    
 <div className="comment-avatar"></div>

  <div className="comment-content">
    <h4>Siti Rahma</h4>

    <p>
      Semoga ada update lanjutan terkait berita ini.
    </p>
  </div>

</div>
  </div>
</section>
          </div>

          <aside className="sidebar">

            <h3>Berita Terpopuler</h3>

{allNews
  .filter((item) => item.title !== news.title)
  .slice(0, 4)
  .map((item, index) => (
                 <Link
  key={index}
  to="/news"
  state={{
    news: item,
    allNews,
  }}
  className="sidebar-link"
>
  <div className="sidebar-card">
    <img
      src={item.image.small}
      alt={item.title}
    />

    <p>{item.title}</p>
  </div>
</Link>
            ))}

          </aside>

        </div>

      </div>
<section className="related-news">
  <h2>Berita Terkait</h2>

  <div className="recommendation-grid">
    {allNews
      .filter((item) => item.title !== news.title)
      .slice(0, 4)
      .map((item, index) => (
        <Link
          key={index}
          to="/news"
          state={{
            news: item,
            allNews,
          }}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="news-card">
            <img
              src={item.image.small}
              alt={item.title}
            />
            <h4>{item.title}</h4>
          </div>
        </Link>
      ))}
  </div>
</section>
      <Footer />
    </>
  );
}

export default Detail;