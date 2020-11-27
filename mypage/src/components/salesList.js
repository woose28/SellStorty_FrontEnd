import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftMenu from './leftMenu';
import SalesItem from './salesItem';
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
  txt_salesList : {
    width: 'auto',
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
export default function SalesList(){
  const classes = useStyles();
  const getInfo = () => {
    let info = [];
    for(let i = 0; i < 49; i++){
      info[i] = {id:i, title:'책 이름 '+(i+1), enrollment_date:'2020.01.01 00:00', price:String(i*1000), cnt_of_sales:String(i+10), revenue:String((i*1000)*(i+10))}
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
          return <SalesItem title={i.title} enrollment_date={i.enrollment_date} price={i.price} cnt_of_sales={i.cnt_of_sales} revenue={i.revenue}/>    
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
      <LeftMenu mainGroup='panel3' subGroup='salesList'/>
      <div className={classes.content}>
        <div className={classes.txt_salesList}>판매 중인 전자책</div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        {
          count !== 0 ? itemAndPage() : itemIsNone()
        }
      </div>
    </div>
  );
}
