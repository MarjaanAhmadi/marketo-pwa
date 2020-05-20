import React from 'react';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {  makeStyles} from "@material-ui/styles";
import HeaderText from '../../../../mainComponents/HeaderText/HeaderText';
import { useState } from 'react';
const useStyles = makeStyles({
    rootSearch: {
        paddingTop: 6,
        display: 'flex',
        alignItems: 'center'
      },
      input: {
          fontFamily: 'IranSans'
      },
        paper: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: "15px",
            height: 50,
            padding: "0 10px",
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'space-between'
    
          },
          iconButton: {
          },
          button: {
            position: 'fixed',
            bottom: "10%",
            backgroundColor: '#2C7BE5',
            color: 'white',
            borderRadius: 10,
            width: '40%',
            fontFamily: 'IranSans',
            right: '30%'
        },
    
    root: {
        paddingTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    locIcon: {
        color: '#2C7BE5',
        fontSize: 40
    },
    plusIcon: {
        color: '#2C7BE5',
        fontSize: 25,
        marginTop: 10
    },
    titleText: {
        fontSize: 15,
        fontWeight: 700,
        padding: 20
    },
    newAddress: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
        cursor: 'pointer',
        marginRight: 10
    },
    newAddressTitle: {
        color: '#2C7BE5',
        fontSize: 14,
        marginTop: 10,
        padding: 2
    }
})
const UserDataAddress = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [dataAddress, setDataAddress] = useState({
        postalCode: '',
        phoneNumber: '',
        address: ''
    })
    return(
        <div className={classes.root}>
            <HeaderText icon='Info' text='لطفا اطلاعات را دقیق وارد کنید'/>
            {/* <div className={classes.title}>
                <PinDropIcon className={classes.locIcon}/>
                <span className={classes.titleText}></span>
            </div> */}
            <div className={classes.rootSearch}>
                <Paper component="form" className={classes.paper}>
                    <InputBase
                    value={dataAddress.phoneNumber}
                    className={classes.input}
                    placeholder="شماره تماس"
                    onChange={(event) => {
                        setDataAddress({
                            ...dataAddress,
                            phoneNumber: event.target.value
                        })
                    }}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
                
                </Paper>
            </div>
            <div className={classes.rootSearch}>
                <Paper component="form" className={classes.paper}>
                    <InputBase
                    value={dataAddress.postalCode}
                    className={classes.input}
                    placeholder="کدپستی" onChange={(event) => {
                        setDataAddress({
                            ...dataAddress,
                            postalCode: event.target.value
                        })
                    }}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
                
                </Paper>
            </div>
         <div className={classes.rootSearch}>
            <Paper component="form" className={classes.paper}>
            <InputBase
            value={dataAddress.address}
              multiline
              rowsMax={4}
              className={classes.input}
              placeholder="آدرس"
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(event) => {
                setDataAddress({
                    ...dataAddress,
                    address: event.target.value
                })
            }}
            />
            
          </Paper>
         </div>
         <Button disabled={dataAddress.address === '' || dataAddress.postalCode === '' || dataAddress.phoneNumber === ''} onClick={() => {props.setAddress(dataAddress)}} className={classes.button}>انتخاب زمان تحویل</Button>

         
            
        </div>
    )
}
export default UserDataAddress;