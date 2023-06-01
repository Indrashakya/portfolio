import './css/footer.css'
import { FaGithub, FaLinkedin, FaFacebook, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div className="row primary">
                <div className="column" style={{ textAlign: 'center' }}>
                    <h3>Indra Shakya</h3>
                    <p>Email: imshakya91@gmail.com</p>
                    <div className="social">
                        <a href='https://github.com/Indrashakya' target={'_blank'}>
                            <FaGithub />
                        </a>
                        <a href='https://www.linkedin.com/in/indra-s-2a83621a5/' target={'_blank'} >
                            <FaLinkedin />
                        </a>

                        <a href="mailto:imshakya91@gmail.com" target="_blank">
                            <FaMailBulk />
                        </a>
                        <div>
                            <a href="#312-785-7909" target={'_blank'} >
                                <FaPhone /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
