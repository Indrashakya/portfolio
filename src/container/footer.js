import './css/footer.css'
import { FaGithub, FaLinkedin, FaFacebook, FaMailBulk, FaPhone} from 'react-icons/fa'

function Footer() {
    return (
        <footer>
            <div class="row primary">
                <div class="column about" style={{ textAlign: 'center' }}>
                    <h3>Indra Shakya</h3>
                    <p>Phone: +312785-7909</p>
                    <p>Email: imshakya91@gmail.com</p>
                    <div class="social">
                        <a href='#https://github.com/Indrashakya' target={'_blank'}>
                            <FaGithub />
                        </a>
                        <a href='#https://www.linkedin.com/in/indra-shakya/' target={'_blank'}>
                            <FaLinkedin />
                        </a>

                        <a href="#imshakya91@gmail.com" target={'_blank'}>
                            <FaMailBulk/></a>
                            <div>
                            <a href="#312-785-7909"target={'_blank'} >
                                <FaPhone /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
