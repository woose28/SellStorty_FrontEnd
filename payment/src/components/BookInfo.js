import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, Checkbox } from '@material-ui/core';
import img_thumbnail from '../img/image.svg';
import CustomizedRadio from './CustomizedRadio';
const useStyles = makeStyles((theme) => ({
  container_orderList : {
    display : 'flex',
    flexDirection : 'row',
    marginTop : '32px',
    height : "157px"
  },
  container_basicInfo : {
    display : 'flex',
    flexDirection : 'column',
    marginLeft : "19px",
    flexGrow : '1'
  },
  img_thumbnail : {
    float : 'left',
    marginTop : '32px',
    width: '157px',
    height: '157px',
    objectFit: 'contain',
    opacity: '0.5',
    borderRadius: '6px',
    backgroundColor: '#434343',
  },
  txt_thumbnail : {
    position : 'relative',
    top : '-105px',
    left : '20px',
    width: '120px',
    height: '19px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2.33',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  txt_bookTitle : {
    width: '399px',
    height: '19px',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },

  txt_bookAuthor : {
    marginTop : "10px",
    width: '70px',
    height: '10px',
    fontFamily: 'NanumBarunGothicOTFBold',
    fontSize: '10px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#0099ff',
  },
  container_price : {
    marginTop : '53px',
    display : 'flex',
    flexDirection : 'row-reverse'
  },
  txt_bookPrice : {
    width: '35px',
    height: '17px',
    opacity: '0.8',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#434343',
  },
  txt_basicInfo : {
    marginRight : 'auto',
    marginTop : '6px',
    width: '70px',
    height: '16px',
    opacity: '0.8',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: '#434343',
  },
  container_checkbox : {
    marginTop : 'auto',
    display : 'flex'
  },
  txt_won : {
    marginTop : 'auto',
    marginLeft : 'auto',
    width: '50px',
    height: '23px',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight : '1.3',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#434343',
  },
  checkbox : {
    marginTop : 'auto',
    marginBottom : 'auto',
    marginLeft : '0px',
    width : '16px',
    height : '16px',
    borderRadius : '200px',
    backgroundColor : '#0099ff'
  },
  radio : {
    marginTop : 'auto !important',
    paddingTop : '2px !important',
    display : 'inline !important',
    verticalAlign : 'bottom !important',
  }
}));

export default function BookInfo(){
  const classes = useStyles();

  return(
    <div className={classes.container_orderList}>
      <div>
        <img src={img_thumbnail} className={img_thumbnail}/>
        <div className={classes.txt_thumbnail}>썸네일 이미지</div>
      </div>
      <div className={classes.container_basicInfo}>
        <div className={classes.txt_bookTitle}>책제목</div>
        <a className={classes.txt_bookAuthor} href="./">책 저자 이름</a>
        <div className={classes.container_price}>
          <span className={classes.txt_bookPrice}>가격</span>
          <span className={classes.txt_basicInfo}>기본 정보</span>
        </div>
        <div className={classes.container_checkbox}>
          <CustomizedRadio className={classes.radio}/>
          <span className={classes.txt_won}>0원</span>
        </div>
      </div>
    </div>
  );
}
