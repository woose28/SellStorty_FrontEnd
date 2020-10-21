import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import '../css/index.css';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    paddingLeft : '0 !important',
    paddingRight : '18px !important'
  },
  icon: {
    borderRadius: 6,
    width: 22,
    height: 22,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 22,
      height: 22,
      backgroundImage:
        "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><path d='M10 15 l18 23 l18 -23  ' fill='transparent' stroke='rgba(128,128,128,0.999)' stroke-width='8'/></svg>\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#f5f8fa',
    },
  },

  container_checkbox : {
    marginTop : '47px',
    display : 'flex',
    flexDirection : 'row',
  },

  warning : {
    width: '700px',
    height: '19px',
    opacitiy : '0.7',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight : "2.63",
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },

  test : {
    display : 'flex',
    flexDirection : 'row',
  }
});

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox() {
  const classes = useStyles();
  const warning = "위의 주문정보, 결제대행서비스 이용약관, 개인정보 이용, 구매약관에 동의합니다. (필수)";

  return (
    <div className={classes.container_checkbox}>
      <StyledCheckbox />
      <div className={classes.warning}>{warning}</div>
    </div>
  );
}
