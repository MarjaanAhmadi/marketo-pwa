import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import axiosAuth from '../../../config/axiosAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SubmitButton from '../../../mainComponents/SubmitButton/SubmitButton';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        direction: 'ltr'
    },
    input: {
        width: '2em !important'
    }
});
const Otp = (props) => {
    const classes = useStyles();
    const [seconds, setSeconds] = useState(60);
    const history = useHistory()
    const [otpNum, setOtpNum] = useState('');
    const dispatch = useDispatch();
    const [text, setText] = useState('ثبت')
    const [status, setStatus] = useState(false)
    const phoneNumber = useSelector(state => state.phoneNumber);

    const getToken = async () => {
        try {
        axiosAuth.defaults.headers.common["clientId"] = "75ce206c-e9af-4216-a527-49250dd4ceb5";
        axiosAuth.defaults.headers.common["clientSecret"] = "123";
        axiosAuth.defaults.headers.common["scope"] = "a b c";            
        delete axiosAuth.defaults.headers.common['user_id']


        const response = await axiosAuth.get(`/auth/v1.0/user/login/otp/${phoneNumber}/${otpNum}`);
          
        localStorage.setItem('user-token', response.data.result.data.token);
         
        dispatch({token: response.data.result.data.token, type: 'SET_TOKEN'});
        history.push('/shoppingcard');
        } catch (error) {
            console.log(error)
             
        }
    }
    const getCode = async () => {
         
        try {
            delete axiosAuth.defaults.headers.common['user_id']

            const response = await axiosAuth.get(`/auth/v1.0/otp/${phoneNumber}`);
            setCounterTime();
         
        } catch (error) {
            
        }
    }

    const setCounterTime = () => {
        
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds-1);
            if(seconds === 0) {
                clearInterval(interval)
                // props.changeStatus(false)
                setSeconds(60)
                setText('ارسال مجدد')
            }
        },1000);
        
        return() => {
            clearInterval(interval);
        }
    },[seconds]);

    return(
        <React.Fragment>
            <div className = {classes.root}>
            <OtpInput 
            value={otpNum}
            onChange={otp => {
                setOtpNum(otp)
            }}
            numInputs={4}
            separator={<span>-</span>}
            inputStyle={classes.input}
        />
        
            </div>
        <SubmitButton text={text} seconds={seconds} clickHandle={ () => {getToken()}}/>
        </React.Fragment>
    )
}
export default Otp;