import "./about.css";
import resim from "../../components/img/zeynep.jpg"

export default function About() {
  return (
    <div className="about">
        
        <div className="aboutL">
            <p className="abouHead">HAKKIMDA</p>
            <img className="aboutImg" src={resim} alt="" />
        </div>
        <div className="aboutR">
           <p> 2000 yılında Malatyada doğdum. </p>
            <p> Beydağı Anadolu Lisesi Mezunuyum. </p>
            <p>Fırat Üniversitesinde Yazılım mühendisliği okuyorum.</p>
            <p>Gitar çalmayı , yeni diller öğrenmeyi ve sağlıklı tarifler denemeyi çok severim. </p>
            <p>Bu websitesini sevdiğim şeyleri paylaşmak için oluşturdum. </p>
            
               

           
        </div>
    
    </div>
  )
}
