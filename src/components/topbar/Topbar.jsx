import { Link } from "react-router-dom";
import "./topbar.css";
import resim from "../../components/img/zeynep.jpg";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ANASAYFA
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/about">
              HAKKIMDA
            </Link> 
            </li>
          <li className="topListItem">
          <Link className="link" to="/contact">
               İLETİŞİM
            </Link> 
           </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              YAZI
            </Link>
          </li>
          {user && <li className="topListItem">ÇIKIŞ</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={resim}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                GİRİŞ YAP
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                KAYIT OL
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
