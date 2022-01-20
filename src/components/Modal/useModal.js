import { useState } from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false),

    toggleModal = () => {
        setShowModal(!showModal);
    }

    return {toggleModal, showModal}
}

export default useModal;