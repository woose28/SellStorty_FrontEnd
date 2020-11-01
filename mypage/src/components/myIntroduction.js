import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import LeftMenu from './leftMenu';
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
  txt_myIntroduction : {
    width: '67px',
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
  txt_description : {
    marginTop : '38px',
    width: '327px',
    height: '17px',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  input_introduction : {
    '&:focus' : {
      borderColor : 'none',
    },
    '&::placeholder' : {
      paddingLeft :'400px',
      paddingTop : '128px',
      width: '88px',
      height: '15px',
      fontFamily: 'NanumBarunGothic',
      fontSize: '13px',
      fontWeight: '200',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#434343',
    },
    marginTop : '9px',
    paddingTop : '20px',
    paddingLeft : '20px',
    paddingRight : '20px',
    resize : 'none',
    width : '840px',
    height : '296px',
    border : 'none',
    borderRadius : '6px',
    backgroundColor : 'rgba(67,67,67,.1)',
    fontFamily: 'NanumBarunGothic',
    fontSize: '13px',
    fontWeight: '200',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    color: '#434343',
  },
  btn_edit : {
    '&:hover' : {
      backgroundColor : '#707070',
      border : 'solid 1px #707070',
    },
    marginTop : '20px',
    marginLeft : 'auto',
    width: '173px',
    height: '38px',
    opacity : '0.5',
    borderRadius : '6px',
    border : 'solid 1px #434343',
    backgroundColor : '#434343'
  },
  txt_edit : {
    width : '70px',
    height : '30px',
    fontFamily: 'NanumBarunGothic',
    fontSize: '17px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'center',
    color: '#ffffff',
  }
}));

export default function MyIntroduction(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <LeftMenu mainGroup='panel1' subGroup='myIntroduction'/>
      <div className={classes.content}>
        <div className={classes.txt_myIntroduction}>내 소개</div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        <div className={classes.txt_description}>자신을 셀스토리 여러분들에게 멋지게 소개해주세요 =)</div>
        <textarea className={classes.input_introduction} placeholder="소개가 없습니다."/>
        <Button className={classes.btn_edit}>
          <span className={classes.txt_edit}>수정하기</span>
        </Button>
      </div>
    </div>
  );
}
