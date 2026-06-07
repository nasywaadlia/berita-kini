function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div className="footer-brand">
          <h3>Berita Kini</h3>

          <p>
            Portal berita terpercaya yang menyajikan
            informasi terkini dari Indonesia dan dunia.
          </p>
        </div>

        <div>
          <h4>Kategori</h4>

          <ul>
            <li>Nasional</li>
            <li>Internasional</li>
            <li>Ekonomi</li>
            <li>Olahraga</li>
            <li>Teknologi</li>
          </ul>
        </div>

        <div>
          <h4>Informasi</h4>

          <ul>
            <li>Tentang Kami</li>
            <li>Kontak</li>
            <li>Kebijakan Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>

        <div>
          <h4>Cari Berita</h4>

          <div className="footer-search">
            <input
              type="text"
              placeholder="Cari berita..."
            />

            <button>Cari</button>
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Berita Kini. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;