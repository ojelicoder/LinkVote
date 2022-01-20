import './select.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = (props) => {
    const {onChangeSelect} = props;

    return (
        <>
        <div className='select-line'></div>
            <div className='select_wrapper'>
                <div className='select'>
                    <select onChange={(e) => onChangeSelect(e.target.value)}>
                        <option defaultValue value={null}>Order By</option>
                        <option value="desc">Most Voted ( Z {'>'} A )</option>
                        <option value="asc">Less Voted ( A {'>'} Z )</option>
                    </select>
                    <div className='select-arrow'>
                        <FontAwesomeIcon icon={faSortDown} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dropdown;