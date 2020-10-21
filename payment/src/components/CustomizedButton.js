import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  button : {
    '&:hover' : {
        backgroundColor: '#0099ff',
        border : 'none',
        '& $txt_buttonName' : {
          color : '#ffffff',
        }
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
}));

export default function CustomizedButton(props){
  const classes = useStyles();

  return(
      <Button className={classes.button}>
        <div className={classes.txt_buttonName}>
          {props.method}
        </div>
      </Button>
      );
}
