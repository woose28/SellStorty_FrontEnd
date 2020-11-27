import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import image from '../img/image.svg';
import divider from '../img/divider.svg';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  content : {
    width : '100%',
    marginTop : '38px',
    display : 'flex',
    flexDirection : 'row',
  },
  container_thumbnail : {
    height : '150px',
    display : 'flex',
    flexDirection : 'column',
  },
  img_thumbnail : {
    width: '150px',
    height: '150px',
    objectFit : 'contain',
    opacity : '0.5',
    borderRadius : '6px',
    backgroundColor : '#434343',
  },
  txt_thumbnail : {
    position : 'relative',
    top : '-85px',
    left : '15px',
    width: '120px',
    height: '30px',
    opacity : '1',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#ffffff',
  },
  container_info : {
    width : '100%',
    marginLeft : '35px',
    display : 'flex',
    flexDirection : 'column',
  },
  container_row_1 : {
    width : '100%',
    display : 'flex',
    flexDirection : 'row',
    position : 'relative',
  },
  txt_examination : {
    width : 'auto',
    height : '24px',
    opacity : '0.9',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
    textDecoration : 'underline',
  },
  btn : {
    marginLeft : 'auto',
    width: '160px',
    height: '56px',
    borderRadius : '6px',
    border : `${fade('#434343', 0.5)} 2px solid`,
    textAlign : 'center',
  },
  txt_btn : {
    display : 'inline-block',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#434343',
  },
  container_row_2 : {
    marginTop : '38px',
  },
  txt_title : {
    marginTop : 'auto',
    width : 'auto',
    height : '24px',
    objectFit : 'contain',
    opacity : '0.7',
    fontFamily: 'NanumBarunGothic',
    fontSize: '21px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  container_finalSaveDate : {
    display : 'flex',
    flexDirection : 'column',
    position : 'absolute',
    left : '350px',
    widht : 'auto',
    height : '100%',
  },
  txt_finalSaveDate : {
    width: 'auto',
    height: 'auto',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
    whiteSpace : 'pre-wrap',
  },
  txt_date : {
    marginTop : 'auto',
  },
  img_divider : {
    marginTop : '41.9px',
    width : '100%',
    height : '0',
    objectFit : 'contain',
    border : `solid 1px ${fade('#434343', 0.2)}`,
  },
}));

function EnrollmentBookItem(props){
  const classes = useStyles();

  const title_sclicing = (title) => {
    if(title.length >= 25){
      title = title.slice(0, 25)+'...'
    }
    return title
  }
  
  return(
    <div>
        <div className={classes.content}>
            <div className={classes.container_thumbnail}>
                <img src={image} className={classes.img_thumbnail} alt='thumbnail_img'/>
                <span className={classes.txt_thumbnail}>썸네일 이미지</span>
            </div>
            <div className={classes.container_info}>
                <div className={classes.container_row_1}>
                    <span className={classes.txt_examination}>검수중</span>
                    <Button className={classes.btn}><span className={classes.txt_btn}>완성하기</span></Button>
                </div>
                <div className={clsx(classes.container_row_1, classes.container_row_2)}>
                    <span className={classes.txt_title}>{title_sclicing(props.title)}</span>
                    <div className={classes.container_finalSaveDate}>
                        <span className={classes.txt_finalSaveDate}>최종 저장 일시:</span>
                        <span className={clsx(classes.txt_finalSaveDate, classes.txt_date)}>{props.final_save_date}</span>
                    </div>
                    <Button className={classes.btn}><span className={classes.txt_btn}>삭제하기</span></Button>
                </div>
            </div>
        </div>
        <img src={divider} className={classes.img_divider} alt='divider_bottom'/>
    </div>
  );
}



EnrollmentBookItem.defaultProps = {
  title : '제목 없음',
  final_save_date : '----.--.--'
};

export default EnrollmentBookItem;