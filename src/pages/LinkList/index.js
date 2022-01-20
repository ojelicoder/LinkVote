/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import './link-list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowUp, faArrowDown, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Select from '../../components/Select';
import Modal from '../../components/Modal';
import useModal from '../../components/Modal/useModal';
import Toast from '../../components/Toast';
import Pagination from '../../components/Pagination';

const List = () => {
    const [linkList, setLinkList] = useState(JSON.parse(localStorage.getItem('linkList') || '[]')),
    {toggleModal, showModal} = useModal(),
    [selectedLink, setSelectedLink] = useState([]),
    [toast, setToast] = useState(false),
    [page, setPage] = useState(1),
    [listData, setListData] = useState([]),
    [totalPage, setTotalPage] = useState(0);

    const updateVote = (item, calculate) => {
        const selectedLink = linkList.findIndex(link => link.id === item.id);
        calculate === 'up' ? linkList[selectedLink].point += 1 : linkList[selectedLink].point -= 1;
        linkList[selectedLink].id = Date.now();

        const updateLinkList = [...linkList];

        localStorage.setItem('linkList', JSON.stringify(updateLinkList));
        setLinkList(updateLinkList);
        onChangeSelect('desc');
    },

    deleteLink = (item) => {
        setSelectedLink(item);
        toggleModal();
    },

    confirm = () => {
        const newListList = linkList.filter(link => link.id !== selectedLink.id);
        localStorage.setItem('linkList', JSON.stringify(newListList));
        setLinkList(newListList);
        toggleModal();
        setToast(true);
    },

    toastClosed = () => {
        setToast(false);
    },

    onChangeSelect = (value) => {
        let sortList = [];

        const checkPoint = (a, b) => {
            if(a.point === b.point){
                return b.id - a.id
            }else{
                if(value === 'asc'){
                    return a.point - b.point
                }else if( value === 'desc'){
                    return b.point - a.point
                }
            }
        };

        sortList = [...linkList.sort((a, b) => checkPoint(a,b))];

        setLinkList(sortList);
    };

    useEffect(() => {
        const perPage = 5,
        totalPage = Math.ceil(linkList.length / perPage);
        let pageValue = page;

        if(pageValue > totalPage) pageValue = totalPage;

        const start = (pageValue -1) * perPage,
        end = pageValue * perPage;

        setListData(linkList.slice(start, end));
        setTotalPage(totalPage);
        
    }, [linkList, page]);

    return (
        <div className='container'>
            <Link className='add-link' to='/new-link'>
                <div className='add-link_icon'><FontAwesomeIcon icon={faPlus} /></div>SUBMIT A LINK
            </Link>
            {linkList.length > 0 &&
                <>
                <Select onChangeSelect={onChangeSelect}/>
                    <div className='list'>
                        <div className='list_sort'></div>
                        {listData.map((item) => {
                            return (
                                <div key={item.id} className='item'>
                                    <div className='item-points'>
                                        {item.point} 
                                        <span>POINTS</span>
                                    </div>
                                    <div className='item-detail'>
                                        <h3 className='item-name'>{item.name}</h3>
                                        <a className='item-link' href={item.url} target='_blank' rel='noreferrer'>({item.url})</a>
                                        <div className='item-vote'>
                                            <div className='item-vote_icon item-vote_up' onClick={() => updateVote(item, 'up')}>
                                                <FontAwesomeIcon icon={faArrowUp} />Up Vote
                                            </div>
                                            <div className='item-vote_icon item-vote_down' onClick={() =>  item.point > 0 ? updateVote(item, 'down') : null}>
                                                <FontAwesomeIcon icon={faArrowDown} />Down Vote
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item-delete' onClick={() => deleteLink(item)}><FontAwesomeIcon icon={faMinusCircle} /></div>
                                </div>
                            )
                        })}

                        {showModal &&
                            <Modal 
                                title= 'Remove Link'
                                content= 'Dou you want to remove:'
                                text={selectedLink.name}
                                toggle={toggleModal}
                                confirm={confirm}
                            />
                        }
                
                        {totalPage > 1 &&
                            <Pagination
                                totalPage={totalPage}
                                page={page}
                                setPage={setPage}
                            />
                        } 
                    </div>
                </>
            }

            {toast &&
                <Toast 
                    name={selectedLink.name}
                    message='removed.'
                    type='success'
                    toastClosed={toastClosed}
                />
            }
        </div>
    )
}

export default List