import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import image from '../img/image.svg';
import divider from '../img/divider.svg';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  content : {
    width : '100%',
    marginTop : '38px',
    display : 'flex',
    flexDirection : 'row',
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
  container_thumbnail : {
    height : '150px',
    display : 'flex',
    flexDirection : 'column',
  },
  img_thumbnail : {
    width: '150px',
    height: '150px',
    objectFit : 'contain',
    opacity : '0.5',
    borderRadius : '6px',
    backgroundColor : '#434343',
  },
  txt_thumbnail : {
    position : 'relative',
    top : '-85px',
    left : '15px',
    width: '120px',
    height: '30px',
    opacity : '1',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  container_info : {
    width : '100%',
    marginLeft : '35px',
    display : 'flex',
    flexDirection : 'column',
  },
  container_row_1 : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },
  btn : {
    marginLeft : 'auto',
    width: '160px',
    height: '56px',
    borderRadius : '6px',
    border : `${fade('#434343', 0.5)} 2px solid`,
    textAlign : 'center',
  },
  txt_btn : {
    display : 'inline-block',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#434343',
  },
  container_row_2 : {
    marginTop : '10px',
  },
  txt_title : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '61px',
    height : '24px',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_price : {
    marginTop : '16px',
    marginLeft : '289px',
    width: '68px',
    height: '20px',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  container_row_3 : {
    marginTop : '8px'
  },
  txt_author : {
    display : 'inline-block',
    opacity : '0.6',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_download_date_ml_262 : {
    marginLeft : '262px',
    width : '136px',
    height : '20px',
    opacity : '0.6',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_download_date_ml_60 : {
    marginLeft : '60px',
    width : '136px',
    height : '20px',
    opacity : '0.6',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  img_divider : {
    marginTop : '41.9px',
    width : '100%',
    height : '0',
    objectFit : 'contain',
    border : `solid 1px ${fade('#434343', 0.2)}`,
  },
}));
export default function PurchaseItem(){
  const classes = useStyles();

  return(
    <div>
        <div className={classes.content}>
            <div className={classes.container_thumbnail}>
                <img src={image} className={classes.img_thumbnail} alt='thumbnail_img'/>
                <span className={classes.txt_thumbnail}>썸네일 이미지</span>
            </div>
            <div className={classes.container_info}>
                <div className={classes.container_row_1}>
                    <Button className={classes.btn}><span className={classes.txt_btn}>다운로드</span></Button>
                </div>
                <div className={clsx(classes.container_row_1, classes.container_row_2)}>
                    <span className={classes.txt_title}>책 제목</span>
                    <span className={classes.txt_price}>가격:0원</span>
                    <Button className={classes.btn}><span className={classes.txt_btn}>환불하기</span></Button>
                </div>
                <div className={clsx(classes.container_row_1, classes.container_row_3)}>
                    <span className={classes.txt_author}>책 저자 이름</span>
                    <span className={classes.txt_download_date_ml_262}>2020.00.00 다운</span>
                    <span className={classes.txt_download_date_ml_60}>2020.00.00 다운</span>
                </div>
            </div>
        </div>
        <img src={divider} className={classes.img_divider} alt='divider_bottom'/>
    </div>
  );
}
