import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Gİriş Yap</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Şifre</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Giriş Yap</button>
      </form>
        <button className="loginRegisterButton">Kayıt Ol</button>
    </div>
  );
}
