import logo from "../assets/logo.png";
import lihatPassword from "../assets/lihat-password.png";
import googleIcon from "../assets/google-icon.png";
import "../styles/main.css";
import "../styles/login.css";
import { Link } from "react-router-dom";

export default function Register() {
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
            <h2>Pendaftaran Akun</h2>
            <p>Yuk, daftarkan akunmu sekarang juga!</p>
          </section>

          <form>
            <div className="form-group">
              <label htmlFor="name">
                Nama Lengkap <span id="required-mark">*</span>
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                E-Mail <span id="required-mark">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                No. HP <span id="required-mark">*</span>
              </label>
              <div className="phone-input">
                <div className="country-code">
                  <img
                    src="https://flagcdn.com/w40/id.png"
                    alt="ID Flag"
                    className="flag"
                  />
                  <select defaultValue="+62">
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                  </select>
                </div>
                <input type="tel" id="phone" name="phone" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Kata Sandi <span id="required-mark">*</span>
              </label>
              <div className="input-wrapper">
                <input type="password" id="password" name="password" required />
                <img
                  src={lihatPassword}
                  alt="Lihat Password"
                  id="togglePassword"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Konfirmasi Kata Sandi <span id="required-mark">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                />
                <img
                  src={lihatPassword}
                  alt="Lihat Password"
                  id="togglePassword"
                />
              </div>
            </div>

            <button className="btn login-btn">
            <Link to="/" id="text-cta-login">Masuk</Link>
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
            Daftar dengan Google
          </button>
        </section>
      </main>
    </div>
  );
}
