import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    root : {
        width : '100%',
        display : 'flex',
        flexDirection : 'row',  
    },
    ul : {
        marginRight : 'auto',
        marginLeft : 'auto',
        padding : '0',
    },
    li : {
        listStyle : 'none',
        float : 'left',
    },
    btn_page : {
        width : '39px',
        height : '39px',
        borderRadius : '3px',
        border : 'solid 2px #cccccc',
        backgroundColor : '#ffffff',
        '&:hover' : {
            backgroundColor : '#ededed'
        },
        '&:focus' : {
            border : 'solid 2px #cccccc',
            outline : '2px #cccccc',
        },
        '&:focus $txt_page' : {
            color : '#383a3c'
        },
    },
    txt_page : {
        width : '8px',
        height : '15px',
        fontFamily: 'NanumBarunGothic',
        fontSize: '13px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign : 'left',
        color: '#888888',
    },
    txt_page_selected : {
        width : '8px',
        height : '15px',
        fontFamily: 'NanumBarunGothic',
        fontSize: '13px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textAlign : 'left',
        color: '#383a3c',
    },
    btn_prev : {
        width : '39px',
        height : '39px',
        borderRadius : '3px',
        border : 'solid 2px #cccccc',
        backgroundColor : '#ffffff',
        padding : '0',
        backgroundImage : 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 10 10" fill="none" stroke-width="0.5"><path d="M5 3.5 L4 4.5 L5 5.5" stroke="rgb(136, 136,136)"></path></svg>\')',
        '&:hover' : {
            backgroundColor : '#ededed'
        },
        '&:focus' : {
            border : 'solid 2px #cccccc',
            outline : '2px #cccccc',
        },
    },
    btn_prev_disabled : {
        width : '39px',
        height : '39px',
        borderRadius : '3px',
        border : 'solid 2px #f0f0f0',
        backgroundColor : '#ffffff',
        padding : '0',
        backgroundImage : 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 10 10" fill="none" stroke-width="0.5"><path d="M5 3.5 L4 4.5 L5 5.5" stroke="rgb(240, 240, 240)"></path></svg>\')',
    },
    btn_next : {
        width : '39px',
        height : '39px',
        borderRadius : '3px',
        border : 'solid 2px #cccccc',
        backgroundColor : '#ffffff',
        backgroundImage : 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 10 10" fill="none" stroke-width="0.5"><path d="M4 3.5 L5 4.5 L4 5.5" stroke="rgb(136, 136, 136)"></path></svg>\')',
        '&:hover' : {
            backgroundColor : '#ededed'
        },
        '&:focus' : {
            border : 'solid 2px #cccccc',
            outline : '2px #cccccc',
        },
    },
    btn_next_disabled : {
        width : '39px',
        height : '39px',
        borderRadius : '3px',
        border : 'solid 2px #f0f0f0',
        backgroundColor : '#ffffff',
        backgroundImage : 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="39px" height="39px" viewBox="0 0 10 10" fill="none" stroke-width="0.5"><path d="M4 3.5 L5 4.5 L4 5.5" stroke="rgb(240, 240, 240)"></path></svg>\')',
    }

}))
function Pagination(props){
    const classes = useStyles();
    const { cntItem, pageSize, onChangePage } = props
    const [ curPage, setCurPage ] = React.useState(props.curPage)
    const cntPage = Math.ceil(cntItem/pageSize);
    
    const pages = _.range(1, cntPage+1)
    const handlePageDown = () => {
        setCurPage(curPage-1)
        onChangePage(curPage-1)
    }
    const handlePageUp = () => {
        setCurPage(curPage+1)
        onChangePage(curPage+1)
    }

    const getPage = () => {
        let showing_page_list = [];

        if(cntPage <= 5){
            showing_page_list = pages;
        }
        else if(curPage <= 3){
            showing_page_list = showing_page_list.concat(pages.slice(0, 3), '...', cntPage);
        }
        else if(curPage >= cntPage-2){
            showing_page_list = showing_page_list.concat(1, '...', pages.slice(cntPage-3, cntPage+1));
        }
        else{
            showing_page_list = showing_page_list.concat(1, '...', curPage, '...', cntPage);
        }
        return showing_page_list;
    }

    const showingPages = getPage();
    return (
    <div className={classes.root}>
        <ul className={classes.ul}>
            <li className={classes.li}><button className={curPage === 1? classes.btn_prev_disabled: classes.btn_prev} disabled={curPage === 1? true: false} onClick={handlePageDown}></button></li>
            {
                showingPages.map(page => {
                return(
                <li className={classes.li}>
                    <button className={classes.btn_page} onClick={()=>{ setCurPage(page); onChangePage(page);}} id={page} disabled={ page === '...'? true: false}>
                        <span className={curPage === page ? classes.txt_page_selected : classes.txt_page}>
                            {page}
                        </span>
                    </button>
                </li>)
                })
            }
            <li className={classes.li}><button className={curPage === cntPage? classes.btn_next_disabled: classes.btn_next} disabled={curPage === cntPage? true: false} onClick={handlePageUp}></button></li>
        </ul>
    </div>);
}

export default Pagination;
