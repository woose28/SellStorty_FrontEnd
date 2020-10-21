import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    display : 'inline',
    verticalAlign : 'bottom',
    padding : "0 !important",
    width : '16px !important',
    height : '16px !important',
    marginTop : '10px',
  },
  icon: {
    marginTop : 'auto',
    borderRadius: '50%',
    width: 16,
    height: 16,
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
    marginTop : 'auto',
    backgroundColor: '#0099ff',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'><circle cx='30' cy='30' r='8' fill='white'/></svg>\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#0099ff',
    },
  },
  container_radio : {
    display : 'inline',
    verticalAlign : 'bottom',
  },
  txt_allPage : {
    paddingLeft : '10px',
    width: '153px',
    height: '16px',
    opacitiy : '0.8',
    fontFamily: 'NanumBarunGothicOTF',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  radioGroup : {
    display : 'inline',
    verticalAlign : 'bottom',
  },
  container_set : {
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'flex-end',
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      checked={true}
      className={classes.root}
      value="all"
      color="#0099ff"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  const classes = useStyles();

  return (
    <div className={classes.container_radio}>
      <div className={classes.container_set}>
        <StyledRadio />
        <span className={classes.txt_allPage}>전체 페이지 수 : 0</span>
      </div>
    </div>
  );
}
