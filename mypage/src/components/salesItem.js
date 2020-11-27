import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
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
    position : 'relative',
  },
  txt_examination : {
    width : 'auto',
    height : '24px',
    opacity : '0.9',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
    textDecoration : 'underline',
  },
  txt_enrollmentDate : {
    position : 'absolute',
    left : '496px',
    width : 'auto',
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
  container_row_2 : {
    marginTop : '80px',
  },
  txt_price : {
    marginLeft : '350px',
    width : 'auto',
    height : '20px',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_cnt_of_sales : {
    marginLeft : '0px',
    position : 'absolute',
    left : '437px',
  },
  txt_revenue : {
    marginLeft : '0px',
    position : 'absolute',
    left : '524px',
  },
  container_row_3 : {
    marginTop : '6px'
  },
  img_divider : {
    marginTop : '41.9px',
    width : '100%',
    height : '0',
    objectFit : 'contain',
    border : `solid 1px ${fade('#434343', 0.2)}`,
  },
  txt_title : {
    width : 'auto',
    height : '24px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_price_row_3 : {
    position : 'absolute',
    left : '350px',
    width : 'auto',
    height : '20px',
    objectFit : 'contain',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_cnt_of_sales_row_3 : {
    left : '437px'
  },
  txt_revenue_row_3 : {
    left : '524px',
  }
}));

function SalesItem(props){
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
                    <span className={classes.txt_examination}>검수중</span>
                    <span className={classes.txt_enrollmentDate}>등록일 {props.enrollment_date}</span>
                </div>
                <div className={clsx(classes.container_row_1, classes.container_row_2)}>
                    <span className={classes.txt_price}>가격:</span>
                    <span className={clsx(classes.txt_price, classes.txt_cnt_of_sales)}>판매:</span>
                    <span className={clsx(classes.txt_price, classes.txt_revenue)}>수익금:</span>
                </div>
                <div className={clsx(classes.container_row_1, classes.container_row_3)}>
                    <span className={classes.txt_title}>{props.title}</span>
                    <span className={classes.txt_price_row_3}>{props.price}원</span>
                    <span className={clsx(classes.txt_price_row_3, classes.txt_cnt_of_sales_row_3)}>{props.cnt_of_sales}회</span>
                    <span className={clsx(classes.txt_price_row_3, classes.txt_revenue_row_3)}>{props.revenue}원</span>
                </div>
            </div>
        </div>
        <img src={divider} className={classes.img_divider} alt='divider_bottom'/>
    </div>
  );
}



SalesItem.defaultProps = {
    title : '제목 없음',
    enrollment_date : '----.--.-- --:--',
    price : '--',
    cnt_of_sales : '--',
    revenue : '--',
};

export default SalesItem;