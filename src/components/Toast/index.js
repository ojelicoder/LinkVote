import React, { useEffect, useState } from 'react';
import './toast.scss';

const Toast = (props) => {
    const [toastShow, setToastShow] = useState(true),
    {message, type, name, toastClosed} = props;

    useEffect(() => {
        setToastShow(false)

        setTimeout(() => {
            setToastShow(false)
            toastClosed()
        }, 2000);
    }, [toastClosed])

    return (
        <div className={toastShow ? 'toast' : 'toast in'}>
            <div className={type === 'success' ? 'toast-success' : 'toast-error'}>
                <div className='toast_content'>
                    <span className='toast_content-up'>{name}</span> {message}
                </div>
            </div>
        </div>
    )
}

export default Toast;