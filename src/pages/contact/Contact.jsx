import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
        <div className="contactDef">
            <p>Benimle İletişime Geçin</p>
        </div>
             <form className="contactForm">
        <div className="contactFormGroup">
          <input
            className="contactInput"
            placeholder="Başlık"
            type="text"
            autoFocus={true}
          />
           <input
            className="contactInput"
            placeholder="Adınız"
            type="text"
            autoFocus={true}
          />
          <input
            className="contactInput"
            placeholder="Soyadınız"
            type="text"
            autoFocus={true}
          />
          <input
            className="contactInput"
            placeholder="Email adresiniz"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="contactFormGroup">
          <textarea
            className="contactInput contactText"
            placeholder="Buraya Yazın"
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="contactSubmit" type="submit">
          Gönder
        </button>
      </form>
    </div>
  )
}
