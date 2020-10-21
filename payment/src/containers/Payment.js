import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, Checkbox, Button } from '@material-ui/core';
import img_divider from '../img/divider.svg';
import img_thumbnail from '../img/image.svg';
import { BookInfo, PaymentMethod, CustomizedCheckbox, PaymentButton } from '../components/';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    container_div : {
      marginTop : '60px',
      marginLeft : '375px',
      width : "908px"
    },
    txt_payment : {
      width: '100px',
      height: '27px',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '23px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#434343',
    },

    divider_01 : {
      marginTop : '16px',
      width: '908px',
      height: '0',
      objectFit: 'contain',
      border: 'solid 2px #434343',
    },

    txt_orderList : {
      marginTop : '17px',
      width: '100px',
      height: '26px',
      opacity : '0.7',
      fontSize: '22px',
      color: '#434343',
    },

    divider_02 : {
      marginTop : '32px',
      width: '908px',
      height: '0',
      objectFit: 'contain',
      border: 'solid 1px #434343',
    },

    txt_method : {
      marginTop : '33px',
      width: '100px',
      height: '26px',
      opacity : '0.7',
      fontSize: '22px',
      color: '#434343',
    },

    txt_warning : {
      whiteSpace : 'pre',
      marginTop : '32px',
      width: '606px',
      height: '88px',
      opacity : '0.7',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '14px',
      fontWeight: '300',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.71',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#434343',
    },
    container_bookPrice : {
      marginTop : '31px',
      display : 'flex',
      flexDirection : 'row'
    },
    txt_orderAmountOfBook : {
      width: '200px',
      height: '20px',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '18px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2.33',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#676666',
    },

    txt_bookPrice : {
      marginLeft : 'auto',
      width: '270px',
      height: '20px',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '18px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2.33',
      letterSpacing: 'normal',
      textAlign: 'right',
      color: '#464545',
    },
    container_totalPrice : {
      marginTop : '47px',
      display : 'flex',
      flexDirection : 'row'
    },
    txt_orderAmount : {
      width: '50px',
      height: '26px',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '22px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.91',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#505050',
    },
    txt_totalPrice : {
      marginLeft : 'auto',
      width: '102px',
      height: '27px',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '22px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.91',
      letterSpacing: 'normal',
      textAlign: 'right',
      color: '#434343',
    },
    container_vow : {
        marginLeft : '39px',
        display : 'flex',
        flexDirection : 'row',
    },

    txt_vowOfPayment : {
      display : 'block',
      width: '172px',
      height: '19px',
      opacitiy : '0.7',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '16px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '2.63',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#434343',
    },
    txt_vowOfPrivacy : {
      width: '133px !important',
      marginLeft : '30px'
    },
    txt_vowOfPurchase : {
      width : '100px !important',
      marginLeft : '30px'
    },
    txt_description : {
      marginTop : '31px',
      whiteSpace : 'pre',
      width: '610px',
      height: '41px',
      opacitiy : '0.7',
      fontFamily: 'NanumBarunGothicOTF',
      fontSize: '16px',
      fontWeight: '200',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.38',
      letterSpacing: 'normal',
      textAlign: 'left',
      color: '#434343',
    },
    container_paymentButton : {
      marginTop : '62px',
      display : 'flex',
      flexDirection : 'row-reverse'
    },
    button_payment : {
      marginTop : '62px',
    }
}));

export default function Payment() {
  const classes = useStyles();
  const warning_txt = "- 구매한 자료를 판매자 또는 저작권자의 승낙 없이 복제, 공유, 유포, 배포, 판매하는 것을 금지하며,\n이를 위반할 시 법적 대응이 이루어집니다. 그러한 행위에 따른 모든 민, 형사상의 책임은 구매자에게 있습니다.\n\n- 저작권 보호를 위해 구매한 전자책에 구매자의 닉네임과 전화번호가 워터마크로 삽입되어 다운로드 됩니다.";
  const description = "셀스토리 주식회사는 통신판매중개자로서 오픈마켓 셀스토리 주식회사의 거래당사자가 아니며,\n입점작가가 등록한 상품정보 및 거래에 대해서 셀스토리 주식회사는 일체 책임을 지지 않습니다.";
  return(
    <div className={classes.container_div}>
      <div className={classes.txt_payment}>결제하기</div>
      <img src={img_divider} className={classes.divider_01}/>
      <div className={clsx(classes.txt_payment,classes.txt_orderList)}>주문내역</div>
      <BookInfo/>
      <img src={img_divider} className={classes.divider_02}/>
      <div className={clsx(classes.txt_payment, classes.txt_method)}>결제방법</div>
      <PaymentMethod/>
      <div className={classes.txt_warning}>{warning_txt}</div>
      <img src={img_divider} className={classes.divider_02}/>
      <div className={classes.container_bookPrice}>
        <span className={classes.txt_orderAmountOfBook}>전자책 주문 금액</span>
        <span className={classes.txt_bookPrice}>0원</span>
      </div>
      <div className={classes.container_totalPrice}>
        <span className={classes.txt_orderAmount}>총계</span>
        <span className={classes.txt_totalPrice}>0원</span>
      </div>
      <CustomizedCheckbox/>
      <div className={classes.container_vow}>
        <span className={classes.txt_vowOfPayment}>결제대행서비스 이용약관  ></span>
        <span className={clsx(classes.txt_vowOfPayment,classes.txt_vowOfPrivacy)}>개인정보 이용 약관  ></span>
        <span className={clsx(classes.txt_vowOfPayment,classes.txt_vowOfPurchase)}>구매약관  ></span>
      </div>
      <div className={classes.txt_description}>{description}</div>
      <div className={classes.container_paymentButton}>
        <PaymentButton/>
      </div>
    </div>
  );
}
