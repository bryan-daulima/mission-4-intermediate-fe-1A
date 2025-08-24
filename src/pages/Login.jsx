import logo from "../assets/logo.png";
import lihatPassword from "../assets/lihat-password.png";
import googleIcon from "../assets/google-icon.png";
import "../styles/main.css";
import "../styles/login.css";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login-page">
      <header>
        <nav className="navbar">
          <img src={logo} alt="Logo Videobelajar" className="logo" />
        </nav>
      </header>

      <main>
        <section className="login-section">
          <section className="login-desc">
            <h2>Masuk ke Akun</h2>
            <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          </section>

          <form>
            <div className="form-group">
              <label htmlFor="email">
                E-Mail <span id="required-mark">*</span>
              </label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Kata Sandi <span id="required-mark">*</span>
              </label>
              <div className="input-wrapper">
                <input type="password" id="password" name="password" />
                <img src={lihatPassword} alt="Lihat Password" id="togglePassword" />
              </div>
            </div>

            <div className="forgot-password">
              <a href="#">Lupa Password?</a>
            </div>

            <button className="btn login-btn">
            <Link to="/home" id="text-cta-login">Masuk</Link>
            </button>
          </form>

          <button type="button" className="btn daftar-btn">
            <Link to="/register" id="text-cta-register">Daftar</Link>
          </button>

          <div className="divider">
            <span>atau</span>
          </div>

          <button type="button" className="btn google-login">
            <img src={googleIcon} alt="Google Icon" />
            Masuk dengan Google
          </button>
        </section>
      </main>
    </div>
  );
}
