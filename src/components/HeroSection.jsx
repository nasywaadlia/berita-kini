function HeroSection({ news }) {
  if (!news) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="hero">
      <div className="hero-content">
         <p className="hero-tag">
    Headline
  </p>

  <h1>{news.title}</h1>

  <p>{news.contentSnippet}</p>

  <p className="hero-date">
    {news.isoDate.slice(0, 10)}
  </p>

  <a
    href={news.link}
    target="_blank"
    rel="noreferrer"
    className="hero-link"
  >
    Baca Selengkapnya →
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