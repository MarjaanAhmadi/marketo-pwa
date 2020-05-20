import React from 'react'
import EnterPhoneNumber from "./EnterPhoneNumber"
import { useState } from "react"
import Otp from "./VerifyPhoneNumber";

import { makeStyles } from '@material-ui/core';
import HeaderText from '../../mainComponents/HeaderText/HeaderText';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        paddingTop: 10
    },
    
})
const Auth = () => {
    // if status === true then show otp
    // when it's false then show phone number
    const classes = useStyles();
    const token = useSelector(state => state.token);
    const history = useHistory();
    const [showComp, setShowComp] = useState(false)
    const changeStatus = (status) => {
        setShowComp(status);
        
    };
    useEffect(() => {
        if(token !== null)
        history.push('/')
        
    },[])
    
    return(
        <div>
            <div className={classes.root}>
            <HeaderText text={!showComp ? 'جهت ورود شماره همراه خود را وارد نمایید.' : 'لطفا کد ارسالی را وارد نمایید.' } icon={!showComp ? 'ExitToApp' : 'DoneOutline'}/>
            {
                    !showComp ? <EnterPhoneNumber changeStatus={(status) => {changeStatus(status)}} />
                    : <Otp changeStatus={(status) => {changeStatus(status)}}/>
            }
            </div>
        </div>

    )
}
export default Auth;