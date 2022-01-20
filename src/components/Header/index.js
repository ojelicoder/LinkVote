import './header.scss';
import logo from '../../logo.svg';

const Header = () => {

    return(
        <header>
            <div className='header'>
                <a className='header_link' href="https://www.hepsiburada.com" rel="noreferrer" target="_blank">
                    <img src={logo} className="header_logo" alt="logo"/>
                </a>
                <span className='header_title'>
                    <b>Link</b>VOTE Challenge
                    </span>
            </div>
        </header>
    )
}

export default Header