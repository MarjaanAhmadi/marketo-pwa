import React from 'react';
import {makeStyles} from '@material-ui/styles';
const useStyle = makeStyles({
    labelText: {
        backgroundColor: '#E2574C',
        height: 20,
        width: 25,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        color: 'white',
        fontSize: 12,
        padding: '5px 3px 0 0 '
      }
})
const Label = (props) => {
    const classes = useStyle();
    return(
        <div className={classes.labelText}>{props.discount}</div>
    )
}
export default Label;