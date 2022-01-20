import './pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
    const {totalPage, page, setPage} = props,

    renderPages = () => {
        const pages = [];

        for(let i = 1; i <= totalPage; i++){
            pages.push(
                <div key={i} className={i === page ? 'pagination_page active' : 'pagination_page'}
                onClick={() => setPage(i)}>{i}</div>
            )
        }

        return pages;
    },

    scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    return (
        <div className='pagination'>
            {page !== 1 &&
                <div className='pagination_prev' onClick={() => {setPage(page - 1); scrollTop()}}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            }
            {renderPages()}
            {page !== totalPage &&
                <div className='pagination_next' onClick={() => {setPage(page + 1); scrollTop()}}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            }
        </div>
    )
}

export default Pagination;