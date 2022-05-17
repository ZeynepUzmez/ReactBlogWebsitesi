import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Kayıt Ol</span>
      <form className="registerForm">
        <label>Kullanıcı Adı</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Şifre</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Kayıt Ol</button>
      </form>
        <button className="registerLoginButton">Giriş Yap</button>
    </div>
    )
}
