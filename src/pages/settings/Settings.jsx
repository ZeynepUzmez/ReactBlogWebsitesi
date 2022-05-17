import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import resim from "../../components/img/zeynep.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Profilini Güncelle</span>
          <span className="settingsTitleDelete">Hesabı Sil</span>
        </div>
        <form className="settingsForm">
          <label>Profil Resmi</label>
          <div className="settingsPP">
            <img
              src={resim}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Zeynep" name="name" />
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" name="email" />
          <label>Şifre</label>
          <input type="password" placeholder="*****" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Güncelle
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
