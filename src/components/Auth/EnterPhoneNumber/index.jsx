import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import axiosAuth from '../../../config/axiosAuth';
import { makeStyles } from '@material-ui/styles';
import {Paper} from '@material-ui/core';
import SubmitButton from '../../../mainComponents/SubmitButton/SubmitButton';
import {useDispatch} from 'react-redux';
const useStyles = makeStyles({
   
    rootSearch: {
        paddingTop: 6,
        display: 'flex',
        alignItems: 'center',
        padding: '6px 50px'
      },
      input: {
          fontFamily: 'IranSans'
      },
        paper: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            padding: "0 10px",
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'space-between'
    
          },
     
})
const EnterPhoneNumber = (props) => {
    const classes = useStyles()
    const [phoneNumber, setPhoneNumber] = useState(null);
    const dispatch = useDispatch();
    const loginFlow = async () => {
        try {
            if(phoneNumber.length === 10){
                if(phoneNumber.startsWith('0')){
                    await getCode(phoneNumber.substr(1));
                }
                else {
                    await getCode(phoneNumber);
                }
                props.changeStatus(true)

            }
            
            else {
                alert('10 digits');
            }
        } catch (error) {
            
        }
    }
    const getCode = async (pN) => {
        try {
            dispatch({phoneNumber: phoneNumber, type: 'SET_PHONENUMBER'});
            delete axiosAuth.defaults.headers.common['user_id']
            const response = await axiosAuth.get(`/auth/v1.0/otp/${pN}`);
         
        } catch (error) {
            
        }
    }
    return(
        <div className = {classes.root}>
            <div className={classes.rootSearch}>
            <Paper component="form" className={classes.paper}>
            <InputBase
              
              placeholder="شماره همراه"
                value={phoneNumber}
                onChange={(event) => {
                    setPhoneNumber(event.target.value)
                }}
              className={classes.input}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            
          </Paper>
         </div>
            <SubmitButton text={'ثبت'} seconds={''} clickHandle={loginFlow}/>
        </div>
    )
}
export default EnterPhoneNumber;