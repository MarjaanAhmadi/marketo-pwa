import React from 'react';
import { makeStyles } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import DoneOutline from '@material-ui/icons/DoneOutline';
import PinDropIcon from '@material-ui/icons/PinDrop';
import Info from '@material-ui/icons/Info'

const useStyles = makeStyles({
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
    
});
const HeaderText = (props) => {
    const classes = useStyles();
    const renderIcon = () => {
        if(props.icon === 'ExitToApp')
        return(
            <ExitToApp className={classes.locIcon}/>
        )
        else if(props.icon === 'DoneOutline')
        return(
            <DoneOutline className={classes.locIcon}/>
        )
        else if(props.icon === 'PinDropIcon') 
        return(
            <PinDropIcon className={classes.locIcon}/>
        )
        else if(props.icon === 'Info')
        return(
            <Info className={classes.locIcon}/>
        )
    }
    return(
<div className={classes.title}>
    {
        renderIcon()   
    }
    <span className={classes.titleText}>{props.text}</span>
            </div>
    )
}
export default HeaderText;