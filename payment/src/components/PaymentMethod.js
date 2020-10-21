import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CustomizedButton from './CustomizedButton';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root : {
      marginTop : '32px',
  },
  container_button : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
    width : "100%"
  },
  button : {
    '&:hover' : {
        backgroundColor: '#0099ff',
        border : 'none',
    },
    width : "176px",
    height: '39px',
    borderRadius: '6px',
    border : 'solid 1px #dbdbdb',
    backgroundColor: '#ffffff',
  },

  txt_buttonName : {
    width: '139px',
    height: '20px',
    opacity: '0.7',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#434343',
  },
  second_row : {
    marginTop : '11px'
  }
}));

export default function PaymentMethod(){
  const classes = useStyles();

  return(<div className={classes.root}>
    <div className={classes.container_button}>
      <CustomizedButton method="신용/체크카드"/>
      <CustomizedButton method="실시간 계좌이체"/>
      <CustomizedButton method="무통장 입금"/>
      <CustomizedButton method="휴대폰"/>
      <CustomizedButton method="카카오페이"/>
    </div>
    <div className={clsx(classes.container_button, classes.second_row)}>
      <CustomizedButton method="네이버 페이"/>
      <CustomizedButton method="삼성 페이"/>
      <CustomizedButton method="토스"/>
      <CustomizedButton method="페이코"/>
      <CustomizedButton method="페이 나무"/>
    </div>
  </div>);
}
