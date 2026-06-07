import {
  FaYoutube,
  FaInstagram,
  FaFacebookF
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div className="footer-brand">

          <div className="brand-header">
            <div className="brand-logo"></div>
            <h3>Berita Kini</h3>
          </div>

          <p className="copyright-text">
            © 2026 Berita Kini. All Rights Reserved.
          </p>

          <div className="social-section">
            <h4>Ikuti Kami</h4>

            <div className="social-icons">
              <FaYoutube />
  <FaInstagram />
  <FaFacebookF />
            </div>
          </div>

        </div>

        <div>
          <h4>Telusuri</h4>

          <ul>
            <li>Beranda</li>
            <li>Kesehatan</li>
            <li>Otomotif</li>
            <li>Politik</li>
            <li>Olahraga</li>
            <li>Nasional</li>
            <li>Internasional</li>
          </ul>
        </div>

        <div>
          <h4>Bantuan</h4>

          <ul>
            <li>Kontak Kami</li>
            <li>Laporan Pembajakan</li>
            <li>Kebijakan</li>
          </ul>
        </div>

        <div>
          <h4>Berlangganan Berita Terbaru</h4>

          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Masukan email"
            />

            <button>➤</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;