import './loading.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <div className='loading'>
            <FontAwesomeIcon className='spinner' icon={faSpinner} />
        </div>
    )
}

export default Loading