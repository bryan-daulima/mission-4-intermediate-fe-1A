import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import lihatPassword from "../assets/lihat-password.png";
import googleIcon from "../assets/google-icon.png";
import "../styles/main.css";
import "../styles/login.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+62");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // validasi password
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // cek email sudah ada
    if (users.find((u) => u.email === email)) {
      alert("Email sudah terdaftar!");
      return;
    }

    // simpan user
    users.push({ 
      name, 
      email, 
      phone: `${countryCode}${phone}`, 
      password 
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

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

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">
                Nama Lengkap <span id="required-mark">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                E-Mail <span id="required-mark">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
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
                  <select 
                    value={countryCode} 
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+62">+62</option>
                    <option value="+1">+1</option>
                    <option value="+91">+91</option>
                  </select>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Kata Sandi <span id="required-mark">*</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img src={lihatPassword} alt="Lihat Password" id="togglePassword" />
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <img src={lihatPassword} alt="Lihat Password" id="togglePassword" />
              </div>
            </div>

            <button type="submit" className="btn login-btn">
              Daftar
            </button>
          </form>

          <button
            type="button"
            className="btn daftar-btn"
            onClick={() => navigate("/login")}
          >
            Masuk
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
