import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftMenu from './leftMenu';
import PurchaseItem from './purchaseItem';
import Pagination from './pagination';
import divider from '../img/divider.svg';

const useStyles = makeStyles((theme) => ({
  root : {
    width : '100%',
    marginTop : '71px',
    display : 'flex',
    flexDirection : 'row',
  },
  content : {
    marginLeft : '41px',
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
  },
  txt_purchaseList : {
    width: '150px',
    height: '27px',
    opacity : '0.9',
    fontFamily: 'NanumBarunGothic',
    fontSize: '23px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  img_divider : {
    marginTop : '16px',
    width : '879px',
    height : '0',
    objectFit : 'contain',
    border : 'solid 1px #434343',
  },

}));
export default function PurchaseList(){
  const classes = useStyles();
  const getInfo = () => {
    let info = [];
    for(let i = 0; i < 49; i++){
      info[i] = {id:i, title:'책 이름 '+(i+1), author:'저자 이름 '+(i+1), price:String(i), download_date:'2020.01.01'}
    }
    return info
  }  
  
  const [data] = React.useState({
    info : getInfo(),
    pageSize : 5
  });

  const [curPage, setCurPage] = React.useState(1)
  const { length : count } = data.info;
  const showingItem = data.info.slice(data.pageSize*(curPage-1), data.pageSize*curPage)
  
  const handlePageChange = (page) => {
    setCurPage(page)
  };

  const itemAndPage = () => {
    return (
    <div>
      {
        showingItem.map(i => {
          return <PurchaseItem title={i.title} author={i.author} price={i.price} download_date={i.download_date}/>    
        })  
      }
      <Pagination cntItem={count} pageSize={data.pageSize} curPage={curPage} onChangePage={handlePageChange}/>
    </div>)
    }

  const itemIsNone = () => {
    return(
      <div>데이터가 없습니다.</div>
    )
  }
  return(
    <div className={classes.root}>
      <LeftMenu mainGroup='panel2' subGroup='purchaseList'/>
      <div className={classes.content}>
        <div className={classes.txt_purchaseList}>구매한 전자책</div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        {
          count !== 0 ? itemAndPage() : itemIsNone()
        }
      </div>
    </div>
  );
}
