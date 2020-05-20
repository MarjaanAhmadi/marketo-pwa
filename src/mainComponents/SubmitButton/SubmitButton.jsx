import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    button: {
        marginTop: 10,
        bottom: "10%",
        backgroundColor: '#2C7BE5',
        color: 'white',
        borderRadius: 10,
        width: '40%',
        fontFamily: 'IranSans',
        right: '30%'
    },
})
const SubmitButton = (props) => {
    const classes = useStyles();
    return(
            <Button
                 onClick={() => {
                    props.clickHandle();
                }}
                className={classes.button}
                >
                    {props.text}
                    {props.seconds !== '' ?
                    `(${props.seconds})`
                    : ''
                }
            </Button>
    )
}
export default SubmitButton;