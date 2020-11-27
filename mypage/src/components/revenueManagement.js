import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import LeftMenu from './leftMenu';
import divider from '../img/divider.svg';
import clsx from 'clsx';

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
  container_tab : {
    display : 'flex',
    flexDirection : 'row',
    width : '100%',
    height : 'auto',
  },
  txt_revenueManagement : {
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
    color: '#0099ff',
  },
  txt_transferList : {
    marginLeft : '40px',
    width: 'auto',
    height: '27px',
    opacity : '0.7',
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
  container_info_total : {
    display : 'flex',
    flexDirection : 'row',
    width : '100%',
    height : 'auto,'
  },
  container_info_left : {
    marginTop : '38px',
    display : 'flex',
    flexDirection : 'column',
    width : '50%',
  },
  txt_tot_revenue : {
    width: 'auto',
    height: '20px',
    objectFit : 'contain',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  container_row_1 : {
    display : 'flex',
    flexDirection : 'row',
    marginTop : '24px',
  },
  input_tot_revenue : {
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#434343',
    width : '185px',
    height : '40px',
    borderRadius : '6px',
    border : `solid 2px ${fade('#434343', 0.5)} `,
    '&:focus' : {
      outline : 'none',
      border : `solid 2px ${fade('#434343', 0.5)} `,
    },
  },
  txt_won : {
    marginTop : 'auto',
    marginBottom : 'auto',
    marginLeft : '10px',
    opacity : '0.8',
    fontWeight : '300'
  },
  txt_tot_transfer : {
    marginTop : '50px',
  },
  input_bank_address : {
    marginTop : '24px',
    paddingLeft : '10px',
    paddingRight : '10px',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
    width : '350px',
    height : '40px',
    borderRadius : '6px',
    border : `solid 2px ${fade('#434343', 0.5)} `,
    '&:focus':{
      outline : 'none',
      border : `solid 2px ${fade('#434343', 0.5)} `,
    },
    '&:activate': {
      border : `solid 2px ${fade('#434343', 0.5)} `,
    },
    '&::placeholder' : {
      opacity : '0.5'
    },
  },
  btn_authentication : {
    marginTop: '20px',
    marginLeft: '270px',
    width: '100px',
    height: '40px',
    opacity: '0.5',
    borderRadius: '6px',
    border: 'solid 2px #434343',
    backgroundColor: '#434343',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#525252'
    }
  },
  txt_authentication : {
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  container_info_right : {
    marginTop : '38px',
    display : 'flex',
    flexDirection : 'column',
    width : '50%',
  },
  txt_period: {
    width: 'auto',
    height: '20px',
    objectFit: 'contain',
    opacity: '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_expected_amount_of_deposit: {
    marginTop: '30px',
    width: 'auto',
    height: '20px',
    objectFit: 'contain',
    opacity: '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
}));
export default function RevenueManagement(){
  const classes = useStyles();
  const bank_address_placeholder = '계좌 번호(은행명, -없이 입력해주세요)'


  return(
    <div className={classes.root}>
      <LeftMenu mainGroup='panel3' subGroup='revenuManagement'/>
      <div className={classes.content}>
        <div className={classes.container_tab}>
            <span className={classes.txt_revenueManagement}>매출 관리</span>
            <span className={classes.txt_transferList}>이체 내역</span>
        </div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        <div className={classes.container_info_total}>
            <div className={classes.container_info_left}>
                <span className={classes.txt_tot_revenue}>현재까지 총 수익금</span>
                <div className={classes.container_row_1}>
                    <input className={classes.input_tot_revenue} value={0}/>
                    <span className={clsx(classes.txt_tot_revenue, classes.txt_won)}>원</span>
                </div>
                <span className={clsx(classes.txt_tot_revenue, classes.txt_tot_transfer)}>현재까지 총 입금액</span>
                <div className={classes.container_row_1}>
                    <input className={classes.input_tot_revenue} value={0}/>
                    <span className={clsx(classes.txt_tot_revenue, classes.txt_won)}>원</span>
                </div>
                <span className={clsx(classes.txt_tot_revenue, classes.txt_tot_transfer)}>입금 계좌 번호</span>
                <input className={classes.input_bank_address} placeholder={bank_address_placeholder}/>
                <button className={classes.btn_authentication}><span className={classes.txt_authentication}>인증하기</span></button>
            </div>
            <div className={classes.container_info_right}>
                <span className={classes.txt_period}>2020.00.00 ~ 2020.00.00</span>
                <span className={classes.txt_expected_amount_of_deposit}>예상 입금액</span>
                <div className={classes.container_row_1}>
                    <input className={classes.input_tot_revenue} value={0}/>
                    <span className={clsx(classes.txt_tot_revenue, classes.txt_won)}>원</span>
                </div>
                <span className={classes.txt_expected_amount_of_deposit}>입금 예정일</span>
                <div className={classes.container_row_1}>
                    <input className={classes.input_tot_revenue} value={'2020.0.0'}/>
                    <span className={clsx(classes.txt_tot_revenue, classes.txt_won)}>원</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
