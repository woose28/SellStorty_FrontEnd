import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftMenu from './leftMenu';
import PurchaseItem from './purchaseItem';
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

  return(
    <div className={classes.root}>
      <LeftMenu mainGroup='panel2' subGroup='purchaseList'/>
      <div className={classes.content}>
        <div className={classes.txt_purchaseList}>구매한 전자책</div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        <PurchaseItem/>
      </div>
    </div>
  );
}
