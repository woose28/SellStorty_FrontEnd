import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import divider from '../img/divider.svg';
import { Accordion, AccordionDetails, AccordionSummary, Tab, Tabs} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../css/index.css';

const useStyles = makeStyles((theme) => ({
  root : {
    width : '250px',
    height : '830px',
    display : 'flex',
    flexDirection : 'column',
    backgroundColor : '#ffffff'
  },
  txt_mySellStory : {
    width: '200px',
    height: '27px',
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
  },
  root_tab : {
    width : '100%',
    marginTop : '16px'
  },
  txt_accordionTitle : {
    marginRight : 'auto',
    width: '124px',
    height: '22px',
    opacity : '0.5',
    fontFamily: 'NanumBarunGothic',
    fontSize: '15px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  accordion : {
    '&::before' : {
      visibility : 'hidden',
    },
    backgroundColor : '#ffffff',
    boxShadow : 'none',
  },
  accordion_summary : {
    padding : '0 !important'
  },
  accordion_details : {
    padding : '0 !important',
  },
  tabs : {
    width : '100%',
    backgroundColor : '#f3f4f8',
    borderRadius : '6px',
  },
  tab : {
    padding : '0',
  },
  txt_tab : {
    marginRight : 'auto',
    marginLeft : '20px',
    width: '180px',
    height: '20px',
    opacity : '0.5',
    fontFamily: 'NanumBarunGothic',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  txt_tab_selected : {
    marginRight : 'auto',
    marginLeft : '20px',
    width: '180px',
    height: '20px',
    opacity : '0.8',
    fontFamily: 'NanumBarunGothic',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#434343',
  },
  icon_expandLess : {
    color : '#0099ff'
  }
}));

export default function LeftMenu(props){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(props.mainGroup);
  const [selected] = React.useState(props.subGroup);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return(
    <div className={classes.root}>
      <span className={classes.txt_mySellStory}>마이셀스토리</span>
      <img src={divider} className={classes.img_divider} alt='divider'/>
      <div className={classes.root_tab}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordion}>
          <AccordionSummary expandIcon={expanded === 'panel1' ? <ExpandMoreIcon className={classes.icon_expandLess}/> : <ExpandMoreIcon/>} className={classes.accordion_summary}>
            <span className={classes.txt_accordionTitle}>마이페이지</span>
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Tabs orientation="vertical" className={classes.tabs} value={false}>
              <Tab label={<span className={selected === 'myIntroduction' ? classes.txt_tab_selected : classes.txt_tab}>내 소개</span>} className={classes.tab} href='./myIntroduction'/>
              <Tab label={<span className={selected === 'modifyingMemberInfo' ? classes.txt_tab_selected : classes.txt_tab}>회원정보수정</span>} className={classes.tab} href='./modifyingMemberInfo'/>
            </Tabs>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
          <AccordionSummary expandIcon={expanded === 'panel2' ? <ExpandMoreIcon className={classes.icon_expandLess}/> : <ExpandMoreIcon/>} className={classes.accordion_summary}>
            <span className={classes.txt_accordionTitle}>구매 관리</span>
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Tabs orientation="vertical" className={classes.tabs} value={false}>
              <Tab label={<span className={selected === 'purchaseList' ? classes.txt_tab_selected : classes.txt_tab}>구매한 전자책</span>} className={classes.tab} href='./purchaseList'/>
            </Tabs>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion}>
          <AccordionSummary expandIcon={expanded === 'panel3' ? <ExpandMoreIcon className={classes.icon_expandLess}/> : <ExpandMoreIcon/>} className={classes.accordion_summary}>
            <span className={classes.txt_accordionTitle}>판매 관리</span>
          </AccordionSummary>
          <AccordionDetails className={classes.accordion_details}>
            <Tabs orientation="vertical" className={classes.tabs} value={false}>
              <Tab label={<span className={selected === 'enrollmentBook' ? classes.txt_tab_selected : classes.txt_tab}>전자책 등록</span>} className={classes.tab} href='./enrollmentBook'/>
              <Tab label={<span className={selected === 'salesList' ? classes.txt_tab_selected : classes.txt_tab}>판매 목록</span>} className={classes.tab} href='./salesList'/>
              <Tab label={<span className={selected === 'revenuManagement' ? classes.txt_tab_selected : classes.txt_tab}>매출 관리</span>} className={classes.tab} href='./revenueManagement'/>
            </Tabs>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}
