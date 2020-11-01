import React from 'react';
import { Welcome, MyIntroduction, ModifyingMemberInfo, PurchaseList } from '../components';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root : {
    marginLeft : '375px',
    marginTop : '50px',
    width : '1170px'
  },

}));

export default function Mypage(){
  const classes = useStyles();
  return(
    <Router>
      <div className={classes.root}>
        <Route path="/" component={Welcome}/>
        <Route path="/myIntroduction" component={MyIntroduction}/>
        <Route path="/modifyingMemberInfo" component={ModifyingMemberInfo}/>
        <Route path="/purchaseList" component={PurchaseList}/>
      </div>
    </Router>
  );
}
