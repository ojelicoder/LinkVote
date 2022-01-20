import React, {useState} from 'react';
import './new-link.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Toast from '../../components/Toast';

const NewLink = () => {
    const [linkName, setLinkName] = useState(''),
    [linkUrl, setLinkUrl] = useState(''),
    [toast, setToast] = useState(false),
    [failedToast, setFailedToast] = useState(false);

    const newLinkAdd = () => {
        if(linkUrl !== '' && linkName !== ''){
            if(!checkURL(linkUrl)) {
                setFailedToast(true);
            }else{
                const linkList = JSON.parse(localStorage.getItem('linkList') || '[]'),

                newLink = {
                    id: Date.now(),
                    name: linkName,
                    url: linkUrl,
                    point: 0
                };
        
                linkList.push(newLink);
                localStorage.setItem('linkList', JSON.stringify(linkList.reverse()));
                setToast(true);
            }
        }
    },

    clearInput = () => {
        setLinkName('')
        setLinkUrl('')
    },

    toastClosed = () => {
        setToast(false);
        setFailedToast(false);
        clearInput();
    },

    checkURL = (value) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(value);
    };

    return (
        <div className='container'>
            <div className='new-link'>
                <Link className='new-link_return' to='/'>
                    <FontAwesomeIcon className='new-link_icon' icon={faArrowLeft} />Return to List
                </Link>
                <h1 className='new-link_title'>Add New Link</h1>
                <div className='new-link_input-container'>
                    <span className='new-link_input-name'>Link Name:</span>
                    <input className='new-link_input' placeholder='Link Name:' value={linkName} onChange={(e) => setLinkName(e.target.value)} />
                </div>
                <div className='new-link_input-container'>
                    <span className='new-link_input-name'>Link URL:</span>
                    <input className='new-link_input' placeholder='e.g. http://abc.xyz' value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
                </div>
                <button onClick={newLinkAdd} className='new-link_add'>ADD</button>
            </div>
            {toast &&
                <Toast 
                    name={linkName}
                    message='added.'
                    type='success'
                    toastClosed={toastClosed}
                />
            }
            {failedToast && 
                <Toast 
                    name={linkName}
                    message='invalid URL. Please try again.'
                    type='error'
                    toastClosed={toastClosed}
                />
            }
        </div>
    )
}

export default NewLink