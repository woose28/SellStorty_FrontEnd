import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import smile from '../img/christopher-campbell-28567-unsplash.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root : {
    height : '217px',
    display : 'flex',
    flexDirection : 'row',
    borderRadius : '6px',
    boxShadow : '0 0 8px 0 rgb(0, 0, 0, 0.16)',
    backgroundColor : '#ffffff'
  },
  img_smile : {
    marginLeft : '15px',
    objectFit : 'contain',
  },
  txt_welcome : {
    marginTop : '95px',
    marginBottom : '91px',
    marginLeft : '21px',
    width: '250px',
    height: '28px',
    fontFamily: 'NanumGothic',
    fontSize: '24px',
    fontWeight: '800',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.75',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  btn_enroll : {
    '&:hover' : {
      backgroundColor : '#707070',
      border : 'solid 1px #707070',
    },
    marginTop : '133px',
    marginRight : '30px',
    marginLeft : 'auto',
    width: '235px',
    height: '38px',
    opacity : '0.5',
    borderRadius : '6px',
    border : 'solid 1px #434343',
    backgroundColor : '#434343'
  },

  txt_enroll : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width: '130px',
    height: '100%',
    fontFamily: 'NanumBarunGothic',
    fontSize: '17px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    verticalAlign: '50%',
    color: '#ffffff',
  }
}));

export default function Welcome(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <img src={smile} className={classes.img_smile} alt='smile'/>
      <span className={classes.txt_welcome}>닉네임님 반갑습니다!</span>
      <Button className={classes.btn_enroll}>
        <span className={classes.txt_enroll}>전자책 등록하기</span>
      </Button>
    </div>
  );
}
