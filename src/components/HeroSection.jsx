function HeroSection({ news }) {
  if (!news) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{news.title}</h1>

        <p>{news.contentSnippet}</p>

        <a
          href={news.link}
          target="_blank"
          rel="noreferrer"
        >
          <button>Baca Selengkapnya</button>
        </a>
      </div>

      <div className="hero-image">
        <img
          src={news.image.large}
          alt={news.title}
        />
      </div>
    </section>
  );
}

export default HeroSection;