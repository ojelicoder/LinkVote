import './modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    const {title, content, toggle, text, confirm} = props;

    return (
        <div className='modal_backdrop'>
            <div className='modal_container'>
                <header className='modal_header'>
                    <h3 className='modal_header-title'>{title}</h3>
                    <button className='modal_close' onClick={toggle}><FontAwesomeIcon icon={faTimes} /></button>
                </header>
                <main className='modal_content'>
                    {content}
                    <h2 className='modal_name'>{text}</h2>
                </main>
                <footer className='modal_footer'>
                    <button className='modal_footer-confirm' onClick={confirm}>OK</button>
                    <button className='modal_footer-cancel' onClick={toggle}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default Modal;