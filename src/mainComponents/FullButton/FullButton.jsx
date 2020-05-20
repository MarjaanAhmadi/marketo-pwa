import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        padding: "6px 8px",
        margin: "5px 0",
        backgroundColor:" #36CE91",
        borderRadius: 10,
        color: 'white',
        fontFamily: 'IranSans',
        fontSize: 14,
        position: "absolute",
        width: '100%',
    }
});
const FullButton = (props) => {
    const classes = useStyles();
    return(
        <Button onClick={() => {props.clicked();}} className={classes.root}>{props.title}</Button>
    )
}
export default FullButton;