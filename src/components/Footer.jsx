import footerLogo from '../assets/img/footerLogo.jpg'
import footerData from '../data/Footer'
// import { FaMapLocationDot } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa";
// import { FaCircleInfo } from "react-icons/fa6";
import '../css/footer.css'
import { FaFacebook,FaInstagram, FaLinkedinIn,FaTwitter,FaPinterestP,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
        <footer>
            <section className='part part1'>
                <img src={footerLogo} alt="footerLogo" />
                <p>AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
            </section>
            <section className='part'>
                {footerData.map((item, index) => {
                    return(
                    <div key={index}>
                        <h2>{item.company}</h2>
                  
                            <p><a href="">{item.home}</a></p>
                            <p><a href="">{item.placement}</a></p>
                            <p><a href="">{item.corporateTraining}</a></p>
                            <p><a href="">{item.conatctUs}</a></p>
                       
                    </div>
                    )
                })}
            </section>
            <section className='part'>
                {footerData.map((item, index) => {
                    return(
                    <div key={index}>
                        <h2>{item.courseTrand}</h2>
                            <p>{item.courseName1}</p>
                            <p>{item.courseName2}</p>
                            <p>{item.courseName3}</p>
                            <p>{item.courseName4}</p>
                            <p>{item.courseName5}</p>
                    </div>
                    )
                })}
            </section>
            <section className='part'>
                {footerData.map((item, index) => {
                    return(
                    <div key={index} className='address'>
                        <h2>{item.contactInfo}</h2>
                        <p>{item.address}</p>
                        <p>{item.contactNo}</p>
                        <p>{item.info}</p>
                    </div>
                    )
                })}
                
            </section>
        </footer>
            <hr />
        <div className='footLast'>
        <div className='all-socialMedia'>
        <FaFacebook />
        <FaInstagram />
        <FaLinkedinIn />
        <FaTwitter />
        <FaPinterestP />
        <FaYoutube />
        </div>
        <div className='footl'>
            <p>Copyright © 2024 AchieversIT. All Rights Reserved</p>
            <p><a href=''></a>Privacy Policy</p>
            <p><a href=''></a>Terms of use</p>
            <p><a href="">Refund Policy</a></p>
        </div>
        </div>   
    </div>
  )
}

export default Footer