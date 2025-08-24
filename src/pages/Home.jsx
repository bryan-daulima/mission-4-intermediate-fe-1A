// src/App.jsx
import "../styles/main.css";
import "../styles/home.css";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";

import Card from "../components/Card";
import courses from "../data/Courses";

export default function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img src={logo} alt="Logo Videobelajar" className="logo" />
          <div className="nav-user">
            <span className="nav-link">Kategori</span>
            <img src={avatar} alt="User Avatar" className="avatar" />
          </div>
        </nav>
      </header>

      <section className="hero">
        <section className="hero-desc">
          <h1>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
          <p>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        </section>
        <button className="hero-button">Temukan Video Course untuk Dipelajari!</button>
      </section>

      <main className="container">
        <section className="title-section">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          <nav className="tabs">
            <a href="#" className="active">Semua Kelas</a>
            <a href="#">Pemasaran</a>
            <a href="#">Desain</a>
            <a href="#">Pengembangan Diri</a>
            <a href="#">Bisnis</a>
          </nav>
        </section>

        {/* Card Grid pakai component */}
        <section className="card-grid">
          {courses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </section>

        <section className="newsletter">
          <div className="newsletter-overlay">
            <h4 className="newsletter-subtitle">NEWSLETTER</h4>
            <h2 className="newsletter-title">Mau Belajar Lebih Banyak?</h2>
            <p className="newsletter-desc">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program–program terbaik hariesok.id
            </p>

            <form className="newsletter-form">
              <input type="email" placeholder="Masukkan Emailmu" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-about">
              <img src={logo} alt="Logo Videobelajar" className="logo" />
              <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
              <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p>+62-877-7123-1234</p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h3>Kategori</h3>
                <ul>
                  <li><a href="#">Digital & Teknologi</a></li>
                  <li><a href="#">Pemasaran</a></li>
                  <li><a href="#">Manajemen Bisnis</a></li>
                  <li><a href="#">Pengembangan Diri</a></li>
                  <li><a href="#">Desain</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Perusahaan</h3>
                <ul>
                  <li><a href="#">Tentang Kami</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Kebijakan Privasi</a></li>
                  <li><a href="#">Ketentuan Layanan</a></li>
                  <li><a href="#">Bantuan</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>Komunitas</h3>
                <ul>
                  <li><a href="#">Tips Sukses</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <p className="copyright">@2023 Gerobak Sayur All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
