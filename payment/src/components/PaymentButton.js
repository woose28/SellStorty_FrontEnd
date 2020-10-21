import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  button : {
    '&:hover' : {
      backgroundColor: '#6bc4ff',
    },
    width : "262px",
    height: '50px',
    borderRadius: '6px',
    backgroundColor: '#0099ff',
  },

  txt_buttonName : {
    width: '100px',
    height: '30px',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '19px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
}));

export default function PaymentButton(props){
  const classes = useStyles();

  return(
      <Button className={classes.button}>
        <div className={classes.txt_buttonName}>
          구매하기
        </div>
      </Button>
      );
}
