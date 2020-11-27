import React, { useRef, useState } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import LeftMenu from './leftMenu';
import divider from '../img/divider.svg';
import profile from '../img/profile.png';
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
  txt_modifyingMemberInfo : {
    width: '150px',
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
  container_profile : {
    display : 'flex',
    flexDirection : 'row',
    marginTop : '38px',
  },
  img_profile :{
    width : '103px',
    height : '103px',
    objectFit : 'contain',
  },
  btn_edit_profile : {
    '&:hover' : {
      backgroundColor : '#707070',
      border : 'solid 1px #707070',
    },
    marginLeft : '20px',
    width: '102px',
    height: '22px',
    opacity : '0.5',
    borderRadius : '6px',
    border : 'solid 1px #434343',
    backgroundColor : '#434343'
  },
  txt_edit_profile : {
    width : '50px',
    height : '15px',
    fontFamily: 'NanumBarunGothic',
    fontSize: '10px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'center',
    color: '#ffffff',
  },
  container_name : {
    marginTop : '50px',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },
  txt_name : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '27px',
    height : '17px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'left',
    color: '#434343',
  },
  input_root : {
    '&$input_focused $input_notchedOutline' : {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: `${fade(theme.palette.primary.main, 0.7)} !important`,
    },
    "&:hover $input_notchedOutline": {
      borderColor: `${fade('#434343', 0.2)}`
    },
    fontFamily : 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight : '300',
    fontStretch : 'normal',
    fontStyle : 'normal',
    letterSpacing : 'normal',
    color : '#434343',
  },
  input_notchedOutline : {
    border : 'solid',
    borderWidth : '2px',
    borderColor : `${fade('#434343', 0.2)}`,
    borderRadius : '6px'
  },
  input_focused : {

  },
  input_name : {
    marginLeft : 'auto',
    marginRight : '119px',
    width : '650px',
    height : '52px',
  },
  container_nickName : {
    marginTop : '20px',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },

  txt_nickName : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '50px',
    height : '17px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'left',
    color: '#434343',
  },
  input_nickName : {
    marginLeft : 'auto',
    marginRight : '119px',
    width : '650px',
    height : '52px',
  },
  icon_x : {
    marginRight : '30px'
  },
  container_nickCounter : {
    marginTop : '4px',
    marginLeft : 'auto',
    marginRight : '119px',
    display : 'flex',
    flexDirection : 'row',
    opacity : '0.68',
    fontFamily: 'NanumBarunGothic',
    fontSize: '11px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'right',
    color: '#434343',
  },
  container_mail : {
    marginTop : '24px',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },
  txt_mail : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '50px',
    height : '17px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'left',
    color: '#434343',
  },
  input_mail : {
    marginLeft : 'auto',
    marginRight : '15px',
    width : '650px',
    height : '52px',
  },
  btn_edit_mail : {
    marginTop : 'auto',
    marginBottom : 'auto',
    display : 'flex',
    width : '104px',
    height : '52px',
    borderRadius : '6px',
    border : `2px solid ${fade('#434343', 0.2)}`,
    backgroundColor :'#ffffff'
  },
  txt_edit_mail : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '54px',
    height : '23px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: '300',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'left',
    color: '#434343',
  },
  container_phone : {
    marginTop : '20px',
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
  },
  txt_phone : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '80px',
    height : '17px',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'left',
    color: '#434343',
  },
  img_divider_02 :{
    marginTop : '30px',
  },
  container_withdrawal : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    marginTop : '30px',
  },
  btn_withdrawal : {
    '&:hover' : {
      border : `2px solid ${fade('#808080', 0.8)}`,
      backgroundColor :`${fade('#808080', 0.8)}`,
    },
    marginTop : '30px',
    marginLeft : 'auto',
    display : 'flex',
    width : '90px',
    height : '32px',
    borderRadius : '6px',
    border : `2px solid ${fade('#434343', 0.8)}`,
    backgroundColor :`${fade('#434343', 0.8)}`,
  },
  txt_withdrawal : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '50px',
    height : '20px',
    fontFamily: 'NanumBarunGothic',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'center',
    color: '#ffffff',
  },
  container_complete : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    marginTop : '38px',
  },
  btn_complete : {
    '&:hover' : {
      border :'solid 2px #4fb9ff',
      backgroundColor : '#4fb9ff',
    },
    marginTop : '38px',
    marginRight : 'auto',
    marginLeft : 'auto',
    display : 'flex',
    width : '154px',
    height : '60px',
    borderRadius : '6px',
    border :'solid 2px #0099ff',
    backgroundColor : '#0099ff',
  },
  txt_complete : {
    marginTop : 'auto',
    marginBottom : 'auto',
    width : '120px',
    height : '30px',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign : 'center',
    color: '#ffffff',
  },
}));
export default function ModifyingMemberInfo(){
  const classes = useStyles();
  const nickRef = useRef();
  const [nickname, setNickname] = useState('');
  const clickDelete = (e) => {
    setNickname('');
  };
  const changeNick = (e) => {
    setNickname(e.target.value.toString().slice(0,17));
  };
  return(
    <div className={classes.root}>
      <LeftMenu mainGroup='panel1' subGroup='modifyingMemberInfo'/>
      <div className={classes.content}>
        <div className={classes.txt_modifyingMemberInfo}>회원정보수정</div>
        <img src={divider} className={classes.img_divider} alt='divider'/>
        <div className={classes.container_profile}>
          <img src={profile} className={classes.img_profile} alt='profile'/>
          <Button className={classes.btn_edit_profile}><span className={classes.txt_edit_profile}>프로필 수정</span></Button>
        </div>
        <div className={classes.container_name}>
          <span className={classes.txt_name}>이름</span>
          <TextField variant='outlined' placeholder="이름을 입력해주세요." className={classes.input_name}
            InputProps = {{
              classes : {
                root : classes.input_root,
                notchedOutline : classes.input_notchedOutline,
                focused : classes.input_focused,
              }
            }}
            />
        </div>
        <div className={classes.container_nickName}>
          <span className={classes.txt_nickName}>닉네임</span>
          <TextField variant='outlined' placeholder="작가 닉네임을 입력해주세요." className={classes.input_nickName} ref={nickRef}
            value = {nickname}
            onChange = {changeNick}
            InputProps = {{
              endAdornment : (
                <InputAdornment position = 'end' onClick={clickDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 60 60" fill="none" strokeWidth="15px" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 10 l20 20 l-20 20 l40 -40 l-20 20 l20 20" stroke={fade('#434343', 0.5)}/>
                  </svg>
                </InputAdornment>
              ),
              classes : {
                root : classes.input_root,
                notchedOutline : classes.input_notchedOutline,
                focused : classes.input_focused,
              },
            }}
            />
        </div>
        <div className={classes.container_nickCounter}>
          <span>{nickname.length}</span>
          <span>/17</span>
        </div>
        <div className={classes.container_mail}>
          <span className={classes.txt_mail}>이메일</span>
          <TextField variant='outlined' placeholder="이메일을 입력해주세요." className={classes.input_mail}
            InputProps = {{
              classes : {
                root : classes.input_root,
                notchedOutline : classes.input_notchedOutline,
                focused : classes.input_focused,
              }
            }}
            />
          <Button className={classes.btn_edit_mail}><span className={classes.txt_edit_mail}>변경하기</span></Button>
        </div>
        <div className={classes.container_phone}>
          <span className={classes.txt_phone}>핸드폰 번호</span>
          <TextField variant='outlined' placeholder="휴대폰 번호(-없이 입력해주세요)" className={classes.input_mail}
            InputProps = {{
              classes : {
                root : classes.input_root,
                notchedOutline : classes.input_notchedOutline,
                focused : classes.input_focused,
              }
            }}
            />
          <Button className={classes.btn_edit_mail}><span className={classes.txt_edit_mail}>변경하기</span></Button>
        </div>
        <img src={divider} className={clsx(classes.img_divider, classes.img_divider_02)} alt='divider'/>

        <Button className={classes.btn_withdrawal}><span className={classes.txt_withdrawal}>회원탈퇴</span></Button>
        <Button className={classes.btn_complete}><span className={classes.txt_complete}>정보수정 완료</span></Button>
      </div>
    </div>
  );
}
