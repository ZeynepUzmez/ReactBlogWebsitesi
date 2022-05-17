import "./write.css";
import resim from "../../components/img/aboutİmg.jpg"

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src={resim}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Başlık"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Buraya Yazın"
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Yayınla
        </button>
      </form>
    </div>
  );
}
