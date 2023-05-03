import githubIcon from '../assets/img/github_icon.svg';
import notionIcon from '../assets/img/notion_icon.svg';
import instaIcon from '../assets/img/insta_icon.svg';
import "../style/Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="social-icon">
                <a href=""><img src={githubIcon} /></a>
                <a href=""><img src={notionIcon} /></a>
                <a href=""><img src={instaIcon} /></a>
            </div>
            <p>Contact : youngbibs14@naver.com</p>
            <p>&copy;Copyrights 2023. Code by Youngeun Choi.</p>
      </footer>
    )
}

export default Footer;